const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();

//GET/api/notes?userId=abc123 => List  (optionally filter by UserId)
router.get("/", async (req, res) => {
  const { userId } = req.body;
  const filter = userId ? { userId } : {}; // if userId exists, filter by it, else no filter
  const notes = await Notes.find(filter);
  await Notes.find(filter);

  res.json(notes);
});

//POST /api/notes  => Create (optionally attach userId) =>CREATE
router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;

  if (!title)
    return res.status(400).json({
      message: 'Give the title "My life only just begun!"',
    });
  const note = await Note.create({
    title,
    content,
    userId,
  });
  res.status(201).json(note);
});

//PUT /api/notes/:id  UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const updated = await Note.findByIdAndUpdate(
    id,
    { $set: { title, content } },
    { new: true }
  );
  if (!updated)
    return res.status(404).json({ message: "There was nothing to display" });
  res.json(updated);
});

//DELETE /api/notes/:id DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (result.deletedCount == 0)
    return res.status(404).json({ message: "No display" });
  res.json({ ok: true });
});

module.exports = router;
