import { Author } from "@/types/Movie";
import { Avatar, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import React from "react";

interface ReviewItemProps {
  reviewItem: Author;
}

const ReviewItem = (props: ReviewItemProps) => {
  return (
    <Link href={props.reviewItem.url}>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-row">
          <div className="mx-2">
            <Avatar
              sx={{ bgcolor: red[400] }}
              alt={props.reviewItem.author.charAt(0).toUpperCase()}
              src={`https://image.tmdb.org/t/p/original${props.reviewItem.author_details.avatar_path}`}
            />
          </div>
          <div className="mx-2">
            <p className="text-sm whitespace-nowrap">
              {props.reviewItem.author}
            </p>
            <p
              style={{ fontSize: "11px" }}
            >{`@${props.reviewItem.author_details.username}`}</p>
          </div>
        </div>
        <div className="mx-2 flex flex-col sm:items-center">
          <Rating
            name="read-only"
            precision={0.5}
            value={props.reviewItem.author_details.rating / 2}
            readOnly
          />
          <p style={{ fontSize: "10px" }}>
            {props.reviewItem.updated_at.split("T")[0]}
          </p>
        </div>
      </div>
      <div className="mt-1 h-[70%] sm:h-4/5 overflow-scroll">
        <p
          className="text-white text-sm"
          dangerouslySetInnerHTML={{
            __html: `${props.reviewItem.content}`,
          }}
        ></p>
      </div>
    </Link>
  );
};

export default ReviewItem;
