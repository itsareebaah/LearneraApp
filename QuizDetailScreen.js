import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase"; // Make sure path is correct


const quizData = {
    intro: [
      {
        question: "What is Python?",
        options: ["A snake", "A programming language", "A game", "None of the above"],
        correctAnswer: "A programming language",
      },
      {
        question: "Who developed Python?",
        options: ["Guido van Rossum", "Bjarne Stroustrup", "James Gosling", "Dennis Ritchie"],
        correctAnswer: "Guido van Rossum",
      },
      {
        question: "Which of these is a Python library for data analysis?",
        options: ["NumPy", "React", "Django", "Swift"],
        correctAnswer: "NumPy",
      },
      {
        question: "Which of the following is used to define a function in Python?",
        options: ["def", "function", "func", "method"],
        correctAnswer: "def",
      },
      {
        question: "What is the correct extension for Python files?",
        options: [".py", ".java", ".js", ".html"],
        correctAnswer: ".py",
      },
      {
        question: "What does 'PEP' stand for in Python?",
        options: ["Python Enhanced Proposal", "Python Execution Plan", "Programming Extension Protocol", "None of the above"],
        correctAnswer: "Python Enhanced Proposal",
      },
      {
        question: "Which of these is not a valid Python variable name?",
        options: ["_myVar", "myVar", "var1", "1var"],
        correctAnswer: "1var",
      },
      {
        question: "What does 'print()' function do in Python?",
        options: ["Prints a value", "Defines a function", "Closes a program", "None of the above"],
        correctAnswer: "Prints a value",
      },
      {
        question: "Which function is used to get input from a user in Python?",
        options: ["input()", "scanf()", "getInput()", "read()"],
        correctAnswer: "input()",
      },
      {
        question: "Which of these is used for conditional statements in Python?",
        options: ["if", "for", "while", "continue"],
        correctAnswer: "if",
      },
    ],
    dataTypes: [
      {
        question: "Which of the following is not a data type in Python?",
        options: ["int", "str", "float", "character"],
        correctAnswer: "character",
      },
      {
        question: "What does the 'list' data type do?",
        options: ["Stores numbers", "Stores ordered elements", "Stores key-value pairs", "None of the above"],
        correctAnswer: "Stores ordered elements",
      },
      {
        question: "What data type is used to store true or false values?",
        options: ["bool", "int", "str", "float"],
        correctAnswer: "bool",
      },
      {
        question: "Which of these is not a valid way to define a dictionary in Python?",
        options: ['{}', '[]', 'dict()', 'None of the above'],
        correctAnswer: '[]',
      },
      {
        question: "What is the default value of a variable that is not initialized in Python?",
        options: ["None", "Null", "0", "undefined"],
        correctAnswer: "None",
      },
      {
        question: "Which of the following is used to store key-value pairs?",
        options: ["list", "tuple", "set", "dictionary"],
        correctAnswer: "dictionary",
      },
      {
        question: "Which data type would be used to store decimal numbers?",
        options: ["int", "float", "str", "bool"],
        correctAnswer: "float",
      },
      {
        question: "What is the correct way to declare a tuple in Python?",
        options: ["[]", "{}", "()"],
        correctAnswer: "()",
      },
      {
        question: "Which of these is an immutable data type?",
        options: ["list", "set", "tuple", "dict"],
        correctAnswer: "tuple",
      },
      {
        question: "How do you declare a set in Python?",
        options: ["{}", "[]", "()", "None of the above"],
        correctAnswer: "{}",
      },
    ],
    operators: [
      {
        question: "Which of these is an arithmetic operator in Python?",
        options: ["+", "-", "*", "/"],
        correctAnswer: "+",
      },
      {
        question: "What is the result of 10 // 3 in Python?",
        options: ["3", "3.33", "4", "2"],
        correctAnswer: "3",
      },
      {
        question: "Which of these operators is used for equality comparison?",
        options: ["=", "==", ">", "<"],
        correctAnswer: "==",
      },
      {
        question: "What does the '%' operator do in Python?",
        options: ["Division", "Modulus", "Exponentiation", "None of the above"],
        correctAnswer: "Modulus",
      },
      {
        question: "Which operator is used for logical AND in Python?",
        options: ["&", "&&", "and", "or"],
        correctAnswer: "and",
      },
      {
        question: "What does the '**' operator do in Python?",
        options: ["Exponentiation", "Multiplication", "Division", "None of the above"],
        correctAnswer: "Exponentiation",
      },
      {
        question: "What is the output of 3 > 2 and 2 < 5?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: "True",
      },
      {
        question: "Which operator is used to concatenate strings in Python?",
        options: ["+", "-", "*", "/"],
        correctAnswer: "+",
      },
      {
        question: "What is the result of 5 == 5 in Python?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: "True",
      },
      {
        question: "Which operator is used for 'not' in Python?",
        options: ["!", "not", "not equal", "&&"],
        correctAnswer: "not",
      },
    ],
    functions: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["def", "func", "function", "method"],
        correctAnswer: "def",
      },
      {
        question: "What is the return value of a function that doesn't explicitly return anything?",
        options: ["None", "Null", "0", "undefined"],
        correctAnswer: "None",
      },
      {
        question: "What is the purpose of a function's 'parameter'?",
        options: ["To store the result of the function", "To pass data into the function", "To define a variable", "None of the above"],
        correctAnswer: "To pass data into the function",
      },
      {
        question: "How do you call a function in Python?",
        options: ["call function()", "function()", "invoke function()", "None of the above"],
        correctAnswer: "function()",
      },
      {
        question: "Which function is used to get the length of a string in Python?",
        options: ["len()", "length()", "size()", "count()"],
        correctAnswer: "len()",
      },
      {
        question: "Which keyword is used to call a function's return value in Python?",
        options: ["return", "yield", "call", "None of the above"],
        correctAnswer: "return",
      },
      {
        question: "Which of these can be used to pass a default argument to a function?",
        options: ["None", "def argument = value", "value = argument", "def function(value = default)"],
        correctAnswer: "def function(value = default)",
      },
      {
        question: "How do you create a function that doesn't accept any arguments?",
        options: ["def function():", "def function(None):", "def function() = None:", "def function(): None"],
        correctAnswer: "def function():",
      },
      {
        question: "How do you define a recursive function?",
        options: ["A function that calls itself", "A function with multiple returns", "A function with no parameters", "None of the above"],
        correctAnswer: "A function that calls itself",
      },
      {
        question: "How do you define a lambda function in Python?",
        options: ["lambda x: x + 1", "function x(x + 1)", "def lambda(x) return x + 1", "None of the above"],
        correctAnswer: "lambda x: x + 1",
      },
    ],
    strings: [
      {
        question: "Which of these is used to concatenate two strings in Python?",
        options: ["+", "-", "*", "/"],
        correctAnswer: "+",
      },
      {
        question: "What method is used to find the index of a substring in a string?",
        options: ["index()", "find()", "search()", "position()"],
        correctAnswer: "find()",
      },
      {
        question: "How do you convert a string to uppercase in Python?",
        options: [".upper()", ".capitalize()", ".toUpperCase()", ".convert()"],
        correctAnswer: ".upper()",
      },
      {
        question: "How can you check the length of a string in Python?",
        options: ["len(string)", "string.length", "string.size", "None of the above"],
        correctAnswer: "len(string)",
      },
      {
        question: "How do you remove leading whitespace from a string in Python?",
        options: [".trim()", ".strip()", ".remove()", ".lstrip()"],
        correctAnswer: ".strip()",
      },
      {
        question: "What method is used to replace a substring in a string?",
        options: [".replace()", ".swap()", ".change()", ".update()"],
        correctAnswer: ".replace()",
      },
      {
        question: "How do you convert a string to a list in Python?",
        options: [".split()", ".toList()", ".join()", ".list()"],
        correctAnswer: ".split()",
      },
      {
        question: "Which method is used to check if a string contains only digits?",
        options: [".isAlpha()", ".isAlphaNumeric()", ".isNumeric()", ".isDigit()"],
        correctAnswer: ".isDigit()",
      },
      {
        question: "Which method is used to convert a string to lowercase in Python?",
        options: [".lower()", ".lowercase()", ".downcase()", ".lowered()"],
        correctAnswer: ".lower()",
      },
      {
        question: "Which of the following is used to join two strings?",
        options: [".join()", ".combine()", ".add()", ".concat()"],
        correctAnswer: ".join()",
      },
    ],
    loops: [
      {
        question: "What type of loop is most commonly used for iterating over a sequence?",
        options: ["for loop", "while loop", "do-while loop", "repeat loop"],
        correctAnswer: "for loop",
      },
      {
        question: "Which keyword is used to terminate a loop in Python?",
        options: ["stop", "end", "continue", "break"],
        correctAnswer: "break",
      },
      {
        question: "Which loop type is used to execute a block of code while a condition is true?",
        options: ["for loop", "while loop", "do-while loop", "None of the above"],
        correctAnswer: "while loop",
      },
      {
        question: "How do you skip to the next iteration in a loop in Python?",
        options: ["continue", "next", "pass", "skip"],
        correctAnswer: "continue",
      },
     
    ]  
  // Add more topics here...
};




const QuizDetailScreen = () => {
  const route = useRoute();
  const { quizId } = route.params;
  const navigation = useNavigation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null); // To disable button after selection

  const currentQuiz = quizData[quizId];

  const handleAnswer = async (answer) => {
    if (selected !== null) return; // Prevent double-tap

    const currentQ = currentQuiz[currentQuestionIndex];
    const isCorrect = answer === currentQ.correctAnswer;
    setSelected(answer); // Set the selected answer

    const newAnswers = [
      ...answers,
      { question: currentQ.question, selected: answer, isCorrect },
    ];

    setAnswers(newAnswers);
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    // Small delay to show feedback (optional)
    setTimeout(async () => {
      setSelected(null); // Reset button selection for next question

      if (currentQuestionIndex < currentQuiz.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Store result in Firestore
        try {
          console.log("Attempting to save result to Firestore...");
          await addDoc(collection(database, "quizResults"), {
            quizId,
            score: newScore,
            total: currentQuiz.length,
            answers: newAnswers,
            timestamp: new Date().toISOString(),
          });
          console.log("Result stored successfully!");
        } catch (error) {
          console.error("Error storing result:", error);
          Alert.alert("Error", "Could not save result. Please try again.");
        }

        // Navigate to results screen
        navigation.navigate("ResultsScreen", {
          score: newScore,
          total: currentQuiz.length,
          answers: newAnswers,
          quizId,
        });

        // Reset quiz state after navigation
        setTimeout(() => {
          setCurrentQuestionIndex(0);
          setScore(0);
          setAnswers([]);
        }, 500);
      }
    }, 300); // Delay for UX feedback
  };

  const currentQ = currentQuiz[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {`Q${currentQuestionIndex + 1}: ${currentQ.question}`}
      </Text>
      {currentQ.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selected === option && styles.selectedOption,
          ]}
          onPress={() => handleAnswer(option)}
          disabled={selected !== null} // Disable all options after selection
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  selectedOption: {
    backgroundColor: "#90CAF9",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default QuizDetailScreen;