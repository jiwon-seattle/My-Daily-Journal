
module.exports = mongoose => {
  const Journal = mongoose.model(
    "heroku_56vg5r9ks",
    mongoose.Schema(
      {
        date: String,
        weather: String,
        feelings: String,
      },
    )
  );

  return Journal;
};
