describe("pigLatin", function() {
  it("Adds 'ay' to words that begin with a vowel.", function () {
    expect(pigLatin("and")).to.equal("anday");
  });
  it("Moves starting consonant to the end of word and add 'ay'.", function() {
    expect(pigLatin("band")).to.equal("andbay");
  });
  it("Moves starting two consonants to the end of word and add 'ay'.", function() {
    expect(pigLatin("brand")).to.equal("andbray");
  });
});
describe("beginsVowel", function() {
  it("Determines whether a word begins with a vowel.", function () {
    expect(beginsVowel("and")).to.equal(true);
  });
  it("Returns false if a word begins with a consonant.", function() {
    expect(beginsVowel("hand")).to.equal(false);
  });
});
// describe("addAyV", function() {
//   it("Adds 'ay' to the end of every word that begins with a vowel.", function () {
//     expect(addAy("and")).to.equal("anday");
//   });
// });
// describe("beginsConsonant", function() {
//   it("Determines whether a word begins with a consonant(s).", function () {
//     expect(beginsConsonant("schnauzer")).to.equal(true);
//   });
// });

// describe("addAyC", function() {
//   it("Adds 'ay' to the end of every word that begins with a vowel.", function () {
//     expect(addAy("and")).to.equal("anday");
//   });
// });
