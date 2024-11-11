import Link from "next/link";
import Image from 'next-export-optimize-images/picture'

export type PostCardProps = {
  id: string;
  title: string;
  summary: string;
  date: string;
  slug: string;
  hero_image: string;
};

const PostCard = ({ post }: { post: PostCardProps }) => {
  return (
    <div className="card mb-3 mt-3">
      <div className="row g-0">
        <div className="col-md-4 align-self-center text-center">
          {/* <Image src={post.hero_image} style={{ maxHeight: "200px" }} className="img-fluid rounded-start" alt="Post card image"/> */}
          <Image src={post.hero_image} width={300} height={200} className="img-fluid rounded-start" alt="Post card image"/>
        </div>
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body">
            <div key={post.id}>
              <h2 className="card-title" style={{ paddingLeft: "0.3rem", backgroundColor: "var(--bs-light)"}}>
                <Link href={`/posts/${post.slug}`} className="stretched-link" style={{ color : "black" , textDecoration : "none"}}>
                  {post.title}
                </Link>
              </h2>
              <p className="card-text">{post.summary}</p>
            </div>
          </div>
          <div className="card-footer">
            更新日：{post.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;