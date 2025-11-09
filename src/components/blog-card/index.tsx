import { useEffect, useState } from 'react';
import LazyImage from '../lazy-image';
import { PiNewspaper } from 'react-icons/pi';
import { getDevPost, getMediumPost } from '@arifszn/blog-js';
import { formatDistance } from 'date-fns';
import { SanitizedBlog } from '../../interfaces/sanitized-config';
import { ga, skeleton } from '../../utils';
import { Article } from '../../interfaces/article';

// Define proper type for Forem API response
interface ForemArticleResponse {
  title: string;
  description: string;
  cover_image?: string;
  social_image?: string;
  url: string;
  tag_list: string[];
  published_timestamp?: string;
  published_at?: string;
}

const BlogCard = ({
  loading,
  blog,
  googleAnalyticsId,
}: {
  loading: boolean;
  blog: SanitizedBlog;
  googleAnalyticsId?: string;
}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (blog.source === 'medium') {
      getMediumPost({
        user: blog.username,
      }).then((res) => {
        setArticles(res);
      });
    } else if (blog.source === 'dev') {
      getDevPost({
        user: blog.username,
      }).then((res) => {
        // Filter articles by tags if specified
        let filteredArticles = res;

        if (blog.tags) {
          const tagsToFilter = Array.isArray(blog.tags)
            ? blog.tags
            : [blog.tags];

          filteredArticles = res.filter((article: Article) =>
            tagsToFilter.some((tag: string) =>
              article.categories.some(
                (category: string) =>
                  category.toLowerCase() === tag.toLowerCase(),
              ),
            ),
          );
        }

        setArticles(filteredArticles);
      });
    } else if (blog.source === 'forem') {
      // Fetch from Forem API with required headers
      // Note: Use 'per_page' parameter to get more results
      fetch(
        `https://forem.com/api/articles?username=${blog.username}&per_page=10`,
        {
          headers: {
            Accept: 'application/vnd.forem.api-v1+json',
            'Content-Type': 'application/json',
          },
        },
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: ForemArticleResponse[]) => {
          console.log('=== FOREM FETCH DEBUG ===');
          console.log('Raw Forem data:', data);
          console.log('blog.tags from config:', blog.tags);
          console.log('blog config:', blog);

          // Transform data to match Article interface
          const foremArticles: Article[] = data.map((item) => {
            console.log(`Article "${item.title}" has tags:`, item.tag_list);
            return {
              title: item.title,
              description: item.description,
              thumbnail: item.cover_image || item.social_image || '',
              link: item.url,
              categories: item.tag_list || [],
              publishedAt: new Date(
                item.published_timestamp || item.published_at || '',
              ),
            };
          });

          console.log('Transformed articles:', foremArticles);

          // Filter articles by tags if specified
          let filteredArticles = foremArticles;

          if (blog.tags) {
            const tagsToFilter = Array.isArray(blog.tags)
              ? blog.tags
              : [blog.tags];

            console.log('Tags to filter by:', tagsToFilter);

            filteredArticles = foremArticles.filter((article: Article) => {
              const matchFound = tagsToFilter.some((tag: string) => {
                const hasTag = article.categories.some((category: string) => {
                  const match = category.toLowerCase() === tag.toLowerCase();
                  if (match) {
                    console.log(`✓ Match found: "${category}" === "${tag}"`);
                  }
                  return match;
                });
                return hasTag;
              });
              console.log(
                `Article "${article.title}" ${matchFound ? 'INCLUDED' : 'EXCLUDED'}`,
              );
              return matchFound;
            });

            console.log('Final filtered articles:', filteredArticles);
          }

          setArticles(filteredArticles);
        })
        .catch((error) => {
          console.error('Error fetching Forem posts:', error);
          setArticles([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog.source, blog.username, blog.tags]);

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < blog.limit; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      widthCls: 'w-24',
                      heightCls: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderArticles = () => {
    return articles && articles.length ? (
      articles.slice(0, blog.limit).map((article, index) => (
        <a
          className="card shadow-md card-sm bg-base-100 cursor-pointer"
          key={index}
          href={article.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalyticsId) {
                ga.event('Click Blog Post', {
                  post: article.title,
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(article.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={article.thumbnail}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-medium text-base-content opacity-60">
                      {article.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      {formatDistance(article.publishedAt, new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                    <p className="mt-3 text-base-content text-sm">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {article.categories.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          #{category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <PiNewspaper className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          No recent post
        </p>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <PiNewspaper className="text-2xl" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                    : 'My Articles'}
                </h3>
                <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                    : 'Recent posts'}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {loading || !articles ? renderSkeleton() : renderArticles()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
