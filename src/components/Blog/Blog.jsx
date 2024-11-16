import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { author_image, author, post_date, reading_time, cover_image, title, hash_tag } = blog;
  return (
    <div className="mb-10">
      <img className="w-full rounded-lg" src={cover_image} alt="" />

      <div className="mt-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <img src={author_image} alt="" className="rounded-full w-14 mr-2" />
            <div className="">
              <h1 className="font-bold text-lg">{author}</h1>
              <p className="text-xs">{post_date}</p>
            </div>
          </div>
          <div className="">
            <p className="">{reading_time} read icon</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-6xl font-bold mt-5 leading-snug">{title}</h1>
        <p className="text-xs mt-2">{hash_tag}</p>
      </div>
      <div className="">
        <a href="" className="">Mark as read</a>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
