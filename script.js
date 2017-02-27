(function() {
  console.log('Loaded!');

  // An array of all the pre-existing, potential responses by our bot
  var botResponses = [
    "Lol wat?",
    "I'm sorry Dave, I can't let you do that",
    "I'm 300 years old!!",
    "I'm sorry, the only thing I can think of right now is maybe 'Cash me outsah how bow dah'",
    "Mumble mumble mumble hipster ipsum",
    "I'm artificial intelligence",
    "Ok ladies now let's get in formation",
    "Well it's Trump's America now",
    "It's hard to think of something on the spot, I don't blame you guys"
  ];

  // Rest of code goes here!

  // Here I declare and assign variables pointing to elements on the DOM
  var $button = document.querySelector('button');
  var $input = document.querySelector('input');
  var $textResponses = document.querySelector('.text-responses');
  var $form = document.querySelector('form');
  
  // Kudos to Gavin for the question - this line of code will automatically focus on the input element, so you can immediately type something into the chat box
  $input.focus();

  // When we invoke this function, the input 'text' will be pushed into the botResponses array.
  var addTextToArray = function(text) {
    botResponses.push(text);
  }

  // When we invoke this function, your chat message will show up in the chat box, and the potential responses by the chat box will increase by one - the response you input into the chat box! The chat box is LEARNING
  var appendYourTextToBot = function() {

    // Taking the value of the input box -> if you type "What is love", this variable points to "What is love" when this function is invoked
    var inputValue = $input.value;

    // We don't have any elements yet! We need to create new ones, format them, and append them to the right part of the DOM. Here, we create the p and span elements
    var $response = document.createElement("p");
    var $user = document.createElement("span");

    // The span element is given content, as well as a class - it will appear on the screen as John Smith: with the color we assigned the class user in the css
    $user.textContent = "John Smith: ";
    $user.className = "user";

    // Same with the response - we give it a class of response
    $response.className = "response";

    // We nest the span inside the response
    $response.appendChild($user);
    // We add "What is love" to the end of the response (a += 5 is the same as a = a + 5)
    $response.innerHTML += inputValue;
    // We nest the response inside the text-responses (where all the chat is happening)
    $textResponses.appendChild($response);

    // We add "What is love" to the botsResponse array
    addTextToArray(inputValue);
  }

  // When we invoke this function, the bot responds!
  var appendBotResponse = function() {
  
    // Don't worry too much about this math - this is a way to get a random, whole number between 0 and the length of the botsResponse array - we use this to pull a random entry out of the botsResponse array
    var randomNumber = Math.floor(Math.random()*botResponses.length);
    var botResponse = botResponses[randomNumber];

    // The rest of this function is very similar to the previous function
    var $response = document.createElement("p");
    var $user = document.createElement("span");

    $user.textContent = "TextBot: ";
    $user.className = "bot-name";

    $response.className = "response";

    $response.appendChild($user);
    $response.innerHTML += botResponse;
    $textResponses.appendChild($response);
  }

  // When invoked, the input element is cleared;
  var clearInput = function() {
    $input.value = '';
  }

  // When this function is invoked, it's invoked with an event (e)
  var submitText = function(e) {
    // we want to prevent the default behavior of that event, such as a page redirecting when a form is submitting
    e.preventDefault();

    // Only perform the rest of this function when the input is not empty
    if ($input.value !== "") {

      // Do everything!
      appendYourTextToBot();
      appendBotResponse();
      clearInput();
    }
  }

  // When the form tag is submitted (either by clicking the button, or pressing enter on the input tag), invoke the function submitText
  $form.addEventListener('submit', submitText);

})();