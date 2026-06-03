
import Link from 'next/link';
import { BlogActions } from './blog-actions';
import { prisma } from '../../../../lib/prisma';
import MasterProtectedRoute from '@/utils/masterProtectedRoute';


export const dynamic = 'force-dynamic';

export default async function BlogDashboard() {
  const blogs = await prisma.blog.findMany({
    orderBy: { updatedAt: 'desc' },
  });

  const stats = {
    total: blogs.length,
    published: blogs.filter((b) => b.isPublished).length,
    drafts: blogs.filter((b) => !b.isPublished).length,
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <MasterProtectedRoute>
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-[var(--container-padding)] py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-primary-dark)]">
              Blog Dashboard
            </h1>
            <p className="text-[var(--color-text-muted)] mt-1">
              Manage your blog posts and content
            </p>
          </div>
          <Link
            href="/admin-dashboard/blogs/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:bg-[var(--color-primary-hover)] transition-all shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Blog
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[var(--color-section-alt)] rounded-xl p-5 border border-[var(--color-border)]">
            <p className="text-[var(--color-text-muted)] text-sm font-medium">Total Blogs</p>
            <p className="text-2xl font-bold text-[var(--color-text-primary)] mt-1">{stats.total}</p>
          </div>
          <div className="bg-[var(--color-section-alt)] rounded-xl p-5 border border-[var(--color-border)]">
            <p className="text-[var(--color-text-muted)] text-sm font-medium">Published</p>
            <p className="text-2xl font-bold text-[var(--color-emerald)] mt-1">{stats.published}</p>
          </div>
          <div className="bg-[var(--color-section-alt)] rounded-xl p-5 border border-[var(--color-border)]">
            <p className="text-[var(--color-text-muted)] text-sm font-medium">Drafts</p>
            <p className="text-2xl font-bold text-[var(--color-amber)] mt-1">{stats.drafts}</p>
          </div>
        </div>

        {/* Blog List */}
        {blogs.length === 0 ? (
          <div className="text-center py-16 bg-[var(--color-section-alt)] rounded-2xl border border-[var(--color-border)]">
            <div className="w-16 h-16 rounded-full bg-[var(--color-icon-bg-1)] flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">No blogs yet</h3>
            <p className="text-[var(--color-text-muted)] mt-1 mb-4">Create your first blog post to get started</p>
            <Link
              href="/blogs/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Create Blog
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-card)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-section-alt)]">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                      Blog
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                      Page
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border-light)]">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-[var(--color-bg-hover)] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {blog.featuredImg ? (
                            <img
                              src={blog.featuredImg}
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover border border-[var(--color-border)]"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-[var(--color-icon-bg-1)] flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                              </svg>
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-[var(--color-text-primary)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                              {blog.title}
                            </p>
                            <p className="text-xs text-[var(--color-text-faint)] mt-0.5">/{blog.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 rounded-md bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-medium">
                          {blog.pageName}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                            blog.isPublished
                              ? 'bg-[var(--color-icon-bg-4)] text-[var(--color-emerald)]'
                              : 'bg-[var(--color-gold-bg)] text-[var(--color-gold)]'
                          }`}
                        >
                          {blog.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">
                        {formatDate(blog.updatedAt)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <BlogActions blogId={blog.id} slug={blog.slug} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
    </MasterProtectedRoute>
  );
}