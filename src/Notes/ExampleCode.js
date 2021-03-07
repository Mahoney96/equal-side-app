import react from "react";

//Source of all Code below and explanation is credited to Kyle Simpson, from his "Advanced Javascrit Course, available through Pluralsight"//

var foo = "bar"; // Two Statements
                    // 1st) Compiler will do a pass through to check for the complli
                    // 2)  



// EXPLAINANTION CONTINUED:: 

var foo = "bar"; // After the compli

function bar() { // This is a function declaration with a declaration of bar()
    var foo = "baz"; //this is in the scope of the delcared function bar().
                     // It would say "Hey scope of function Bar(), I have a new declaration to declare, his identifier name is foo"
}

function baz(foo) { // The ' Named Parameter ' (foo), of function baz(), is treated like a local variable; as if there was a 'var' in front of the foo 
                    // The variable 'foo', contained within the parameters of the 'function baz(foo)', is registered to the scope of the function baz. 
    foo = "bam";
    bam = "yay";
};






// Steps when executing code // 

// SCOPE: WHERE TO LOOK FOR THINGS: // 

// C++ and java are both compiled where javascript, we send the original source program. Menaing that it's compiled everytime that's it's run. 

// QUESTIONS TO ASK WHEN DEALING WITH SCOPE:
// • Where to Look 

// • Who's doing the looking?
        // • ANSWER: looking for variables(var, let const), lexical identifiers. 

// LHS vs RHS //
        // LHS(LeftHandSide):


        // RHS(RightHandSide):



// Difference between compiled and interpreted: 


// INTERPRETED: Bash is an interpreted Language, meaning that when it's running line (3), it has no idea what to expect on line 4. It hasn't even looked at line 4 yet, it's not there yet, it's still dealing with line 3. 

// COMPILED LANGAUGE: 


// Note: When 

