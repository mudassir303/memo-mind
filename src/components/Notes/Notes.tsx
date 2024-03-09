"use client";

import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

interface Note {
  id: string;
  title: string;
  description: string;
  date: Date;
}

const Notes: React.FC = () => {
  const [note, setNote] = useState<Note>({
    id: "",
    title: "",
    description: "",
    date: new Date(),
  });

  const [notesList, setNotesList] = useState<Note[]>([]);
  console.log("notesList", notesList);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotesList(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Note
  ) => {
    const { value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [field]: value,
    }));
  };

  const handleAddNote = () => {
    if (note.title.trim() !== "" && note.description.trim() !== "") {
      const newNote: Note = {
        id: uuidv4(),
        title: note.title,
        description: note.description,
        date: new Date(),
      };
      setNotesList((prevNotesList) => {
        const updatedNotesList = [...prevNotesList, newNote];
        localStorage.setItem("notes", JSON.stringify(updatedNotesList));
        return updatedNotesList;
      });
      setNote({
        id: "",
        title: "",
        description: "",
        date: new Date(),
      });
    } else {
      alert("Please enter both title and description.");
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotesList((prevNotesList) => {
      const updatedNotesList = prevNotesList.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(updatedNotesList));
      return updatedNotesList;
    });
  };

  return (
    <div className="mt-10 mb-20">
      <div className="mb-6">
        <Input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={note.title}
          onChange={(e) => handleInputChange(e, "title")}
        />
      </div>
      <Textarea
        name="description"
        placeholder="Enter Description"
        value={note.description}
        onChange={(e) => handleInputChange(e, "description")}
        rows={5}
      />
      <button
        className="bg-brand-primary py-2 px-4 rounded-lg mt-6 text-brand-secondary"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      <div className="mt-10">
        <h2 className="text-xl text-white font-medium font-Poppins">
          My Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mt-10">
          {notesList?.map(({ title, description, date, id }, i) => {
            return (
              <Card
                handleDeleteNote={handleDeleteNote}
                id={id}
                key={i}
                title={title}
                description={description}
                date={date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
