
module.exports = mongoose => {
  const Journal = mongoose.model(
    "journal",
    mongoose.Schema(
      {
        date: String,
        temperature: Number,
        feelings: String,
      },
    )
  );

  return Journal;
};
