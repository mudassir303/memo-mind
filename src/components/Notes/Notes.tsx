"use client";

import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import SearchIcon from "../SearchIcon/SearchIcon";

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
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    console.log("storedNotes", storedNotes);

    if (storedNotes) {
      setNotesList(JSON.parse(storedNotes));
    }
  }, []);

  console.log("notesList", notesList);
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
      const updatedNotesList = [...notesList, newNote]; // Append new note to the existing list
      localStorage.setItem("notes", JSON.stringify(updatedNotesList)); // Store updated list
      setNotesList(updatedNotesList); // Update state with the new list
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
    const updatedNotesList = notesList.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotesList));
    setNotesList(updatedNotesList);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = searchQuery
    ? notesList.filter(
        (note) =>
          note?.title?.toLowerCase().split("")[0] ==
            searchQuery?.toLowerCase().split("")[0] &&
          note?.title.toLowerCase().includes(searchQuery)
      )
    : notesList;

  return (
    <div className="mt-10 mb-20">
      <h1 className="text-center text-white font-bold text-3xl font-Montserrat">
        Memo Mind
      </h1>
      <p className="text-brand-primary font-medium text-center mt-2 font-Poppins">
        Where Thoughts Become Notes.
      </p>
      <div className="mb-6 mt-10">
        <Input
          otherClasses=""
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
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-white font-medium font-Poppins">
            My Notes
          </h2>
          <div className="max-w-96 relative">
            <Input
              otherClasses="text-sm placeholder:text-white placeholder:font-light placeholder:text-sm"
              name="search"
              type="text"
              placeholder="Search Notes"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div>
              <SearchIcon
                otherClasses="absolute top-2 right-3"
                width="20"
                height="20"
                fill="white"
              />
            </div>
          </div>
        </div>
        {filteredNotes.length === 0 && searchQuery && (
          <p className="text-white text-center mt-10">No matching notes found.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mt-10">
          {filteredNotes?.map(({ title, description, date, id }, i) => {
            return (
              <Card
                handleDeleteNote={handleDeleteNote}
                id={id}
                key={i}
                title={title}
                description={description}
                date={date || undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
