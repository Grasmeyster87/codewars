// Regular expression that matches binary inputs that are multiple of 3
//
// Idea: build a DFA for "number mod 3" while reading a binary string
// left-to-right, where the state is the current remainder (0, 1, or 2).
// Reading a bit b from state s moves to state (2*s + b) mod 3:
//   state 0 --0--> 0      state 0 --1--> 1
//   state 1 --0--> 2      state 1 --1--> 0
//   state 2 --0--> 1      state 2 --1--> 2
//
// State 0 is both the start and the only accepting state (remainder 0
// means "divisible by 3"). Converting that DFA into a regular expression
// gives the classic pattern below:
//
//   ^(0|1(01*0)*1)*0*$
//
// - "0"            : stay in state 0 by reading a 0
// - "1(01*0)*1"    : leave state 0 on a 1, wander through states 1/2 for a
//                     while, and come back to state 0 exactly when another
//                     1 is read (this sub-pattern always returns to state 0)
// - the whole group repeated (*) lets us chain any number of "excursions"
//   that each start and end back at state 0
// - trailing "0*"  : after the last "1" landed us back in state 0, any
//                     number of extra 0s keeps us there
//
// ^ and $ anchor the match so non-binary characters (spaces, letters,
// other digits) or partial matches are rejected.
var multipleOf3Regex = /^(0|1(01*0)*1)*0*$/;

module.exports = multipleOf3Regex;