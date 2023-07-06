import TextContent from "./TextContent";
import HeaderContent from "./HeaderContent";
import ImageContent from "./ImageContent";

export default function ContentProvider({ contents }) {
  return (
    <div>
      {contents &&
        contents.map((data, i) => {
          return (
            <div key={data.id}>
              {data && data.attributes && data.attributes.type === "text" && (
                <TextContent text={data.attributes.content} />
              )}
              {data && data.attributes && data.attributes.type === "header" && (
                <HeaderContent text={data.attributes.header} />
              )}
              {data && data.attributes && data.attributes.type === "image" && (
                <ImageContent image={data.attributes.image} />
              )}
            </div>
          );
        })}
    </div>
  );
}
