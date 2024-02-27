Write a function that returns whether two words are exactly "one edit" away using the following signature:
bool OneEditApart(string s1, string s2);
An edit is:
Inserting one character anywhere in the word (including at the beginning and end)
Removing one character
Replacing one character
Examples:
OneEditApart("cat", "dog") = false
OneEditApart("cat", "cats") = true
OneEditApart("cat", "cut") = true
OneEditApart("cat", "cast") = true
OneEditApart("cat", "at") = true
OneEditApart("cat", "act") = false
