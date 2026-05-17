'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { posts } from '@/data/blog-posts';

export default function BlogPostPage() {
  const params = useParams();
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-8">This blog post doesn't exist or may have been moved.</p>
          <Link href="/blog" className="btn-primary">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Nav spacer */}
      <div className="h-16 md:h-20 bg-white" />

      <article className="bg-light min-h-screen">
        {/* Header */}
        <div className="gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-white font-medium">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                JA
              </div>
              <div>
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-sm text-white/50">CEO, AI Dynamics</p>
              </div>
            </div>

            {/* Case study badge */}
            {post.featuredCaseStudy && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/10">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-white/80">
                  Based on real project: <span className="text-accent font-medium">{post.featuredCaseStudy}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-dark mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author bio */}
          <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shrink-0">
                JA
              </div>
              <div>
                <h3 className="font-bold text-dark text-lg mb-1">Jasmel Acosta</h3>
                <p className="text-sm text-gray-500 mb-3">CEO, AI Dynamics — Miami, FL</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jasmel builds custom AI automation systems for small and mid-sized businesses. 
                  His work spans healthcare (HIPAA-compliant scribe AI, radiology analysis), 
                  legal (immigration law RAG), and general business automation. 50+ deployments, 
                  $2M+ in documented client savings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More posts */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-8">More Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                .filter(p => p.slug !== post.slug)
                .slice(0, 3)
                .map(p => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-light rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all"
                  >
                    <span className="text-xs text-primary font-medium">{p.category}</span>
                    <h3 className="font-bold text-dark mt-2 mb-2 group-hover:text-primary transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
                    <span className="text-xs text-gray-400 mt-3 block">{p.date}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Free consultation to identify your highest-ROI automation opportunities.
            </p>
            <a
              href="https://aidynamic.pro/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
