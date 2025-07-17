import Image from "next/image";
import yellowStar from "@/app/assets/icons/yellowStar.svg";
import grayStar from "@/app/assets/icons/grayStar.svg";

export default function StarRating({ rating = 0 }) {
  return (
    <div className="flex gap-1">
      {Array(5)
        .fill()
        .map((_, i) => (
          <Image
            key={i}
            src={i < rating ? yellowStar : grayStar}
            alt="star"
          />
        ))}
    </div>
  );
}
