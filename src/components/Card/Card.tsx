import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  date: Date;
  handleDeleteNote: (id: string) => void;
  id: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  date,
  handleDeleteNote,
  id,
}) => {
  return (
    <div className="lg:max-w-96 w-full bg-brand-secondary p-6 gap-4 flex flex-col justify-between rounded-xl overflow-hidden relative">
      <div>
        <h2 className="mb-4 text-2xl text-white font-OpenSans font-semibold">
          {title}
        </h2>
        <p className="text-brand-gray text-lg font-Poppins break-words">{description}</p>
      </div>
      <div>
        <p className="text-brand-gray text-base font-Poppins">
          {date.toDateString()}
        </p>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 w-full h-[5px] ${styles.cardStyles}`}
      ></div>
      <div className="absolute bottom-6 right-6">
        <button  onClick={() => handleDeleteNote(id)}>
          <Image
            alt="trash-icon"
            src="/assets/trash-icon.svg"
            height={15}
            width={15}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
