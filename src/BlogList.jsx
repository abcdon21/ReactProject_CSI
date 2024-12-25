import React from "react";

const BlogList = () => {
  const blogs = [
    {
      title: "How to Organize Your Thoughts",
      description: "Learn how to declutter your mind and stay productive.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "10 Tips for Better Note-Taking",
      description: "Improve your note-taking skills with these tips.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Power of Journaling",
      description: "Discover how journaling can transform your mindset.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "How to Organize Your Thoughts",
      description: "Learn how to declutter your mind and stay productive.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "10 Tips for Better Note-Taking",
      description: "Improve your note-taking skills with these tips.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Power of Journaling",
      description: "Discover how journaling can transform your mindset.",
      image: "https://via.placeholder.com/150",
    }
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img src={blog.image} alt={blog.title} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
