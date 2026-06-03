import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to performance optimization.",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Development",
    readTime: "5 min read",
    image: "🚀"
  },
  {
    id: 2,
    title: "Why User Experience is Critical for Business Growth",
    excerpt: "Learn how investing in UX design can dramatically improve conversion rates and customer loyalty.",
    date: "March 10, 2024",
    author: "Michael Chen",
    category: "Design",
    readTime: "4 min read",
    image: "🎯"
  },
  {
    id: 3,
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Discover proven SEO techniques that drive organic traffic and improve search engine rankings.",
    date: "March 5, 2024",
    author: "Emily Rodriguez",
    category: "Marketing",
    readTime: "6 min read",
    image: "📊"
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="min-h-screen bg-[#f7f5f1] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex px-5 py-2 rounded-full border border-black/10 bg-white">
            LATEST INSIGHTS
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
            From our blog
            <br />
            <span className="text-amber-600">Industry thoughts</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg">
            Stay updated with the latest trends, tips, and insights from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <span className="text-7xl">{post.image}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-amber-600 hover:translate-x-1 transition">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}