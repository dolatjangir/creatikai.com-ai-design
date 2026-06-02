
import Link from 'next/link';
import { prisma } from '../../../lib/prisma';

export const dynamic = 'force-dynamic';

export default async function BlogListingPage() {
  const blogs = await prisma.blog.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' },
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)] py-[var(--section-py)]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-sm font-medium mb-4">
            Our Blog
          </span>
          <h1 className="text-[var(--hero-title-size)] font-bold text-[var(--color-text-primary)] mb-4">
            Latest Insights & Updates
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Discover tips, guides, and news about our platform and industry.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--color-text-muted)]">No published blogs yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group block bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                {blog.featuredImg ? (
                  <div className="aspect-[16/10] overflow-hidden bg-[var(--color-section-alt)]">
                    <img
                      src={blog.featuredImg}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-[var(--color-icon-bg-1)] flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-medium">
                      {blog.pageName}
                    </span>
                    <span className="text-xs text-[var(--color-text-faint)]">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  {blog.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {blog.tags.split(',').map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[var(--color-section-alt)] text-[var(--color-text-muted)] text-xs"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}