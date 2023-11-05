import { PostContent } from "@/model/PostModel";
import { useRouter } from "next/router";

interface TagProps {
  tags: PostContent["tags"];
}

const TagGroup: React.FC<TagProps> = ({ tags }) => {
  const router = useRouter();
  // const tag = router.query.param;

  const handleClickTag = (tagValue: string) => {
    if (!tagValue) return;
    router.push("/posts/".concat(`tag=${tagValue}&page=1`));
  };

  return (
    <div className="mt-1 ml-1 flex flex-wrap text-center">
      {tags.map((_, index) => (
        <button
          onClick={() => handleClickTag(tags[index])}
          className="mr-2 mb-2 inline-block rounded-xl  bg-indigo-300 
          hover:bg-indigo-500 hover:text-black hover:font-bold text-zinc-50 px-3 pb-1.5 pt-1.5 text-xs 
          font-normal uppercase leading-normal"
          key={index}
        >
          {tags[index]}
        </button>
      ))}
    </div>
  );
};

export default TagGroup;
