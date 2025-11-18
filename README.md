This ReadMe file explains how each of the files in this project works and what other tools I have used for completing this project.
# This project is built using React and also uses other dependencies for styling and functionality.
# App.js
The App.js file is the main component of the React application. This serves as the central hub where other components are imported and rendered.
It helps in managing the overall structure and layout of the application. I have used react functions like useState and useEffect to manage the state and liefecycle methods of the components.
The App.js included preprocessMusicText(), which plays a crucial role in preparing the music text data for rendering. Since I have added different placeholders
in the Strudel music, it was essential that the music is preprocessed to replace all these placeholders with actual values. I have used the following placheholders:
1. <p1_Radio> : this placeholder is used to represent the music pattern. 
2. <Volume>: this placeholder is used to represnet the volume of the music and allows user to adjust the volume through a slider.
3. <BPM>: thsi placeholder is used to change the tempo of the music.
4. <CONVERSION>: this placeholder is used to change the key of the music.
5. <BEATS>: this placeholder is used to change the beats of the music.

Additionally, this also manages the handler for playing, stopping and processing the music text. I have 4 different handler each for a particular function.
# handlePlay(): For playing the music.
# handleStop(): For stopping the music.
# handlehandleProcess(): For processing the music text.
# handleProcAndPlay(): For processing and playing the music text.

Lastly, the App.js also manages all the different files that are used in this project and used for rendering the components. The main components used in this project are:

D3Graph.js
InstrumentToggelSettings.js
JSONhandling.js
PlayStopButtons.js
ShortCutKeys.js
PreprocessorTextarea.js
TempoControls.js


# D3Graph.js
The D3Graph.js file is responsible for rendering the D3 graph in the application with the help of console-monkey-patch.
It uses D3 library to create a dynamic and interactive graph that uses note value from the console-monkey-patch to visualize the music data. I have taken help from Week 12
practical "D3-React" for integrating this functionality. I have added my own variales and also adjusted the practical code to fit my project requirements. 
This is then hooked in the App.js for rendering the graph in the main application.
The practical link : https://lo.unisa.edu.au/mod/lesson/view.php?id=4145167
I have also taken some help from Claude AI for understanding regex for getting note values from the console-monkey-patch. The link for the conversation is added in the AI and links section below.

# InstrumentToggelSettings.js
The InstrumentToggelSettings.js file is responsible for rendering the instrument toggle settings in the application.It allows the user to change the music pattern by selecting
p1: On or p1:HUSH and alos allows user to change the volume of the music with the help of volume slider. This component recives props from the APp.js whcih is used 
to set and get values from the main application. 
For this part I have taken some help from Claude and I have attached the link for the conversation in the AI and links section below.

# JSONhandling.js
This files is responsible for handling JSON data download and upload functionality in the application. I have taken help from the some links which I have mentioned 
in the AI and links section below. This component allows user to download the current music settings in a JSON file and also allows user to upload a JSON file which
automtically updates the music settings in the application. This is then hooked in the App.js for rendering the functionality in the main application.

# PlayStopButtons.js
The PlayStopButtons.js file is responsible for rendering the play and stop buttons in the main application. The component receives the handler functions
as props from the App.js and is used to trigger the plat, stop, process and process & play functionality in the main application. The component is also used for styling
the card and buttons in the main application.

# ShortCutKeys.js
The shortCutKeys.js file is responsible for handling the shortcut keys functionality in the application. I have created 5 major shortcut keys three are added in this file, which
are Stop music, Process Music and Process & Play music. The otehr 2 are added in the JSONhandling.js which is responsible for downloading and uploading JSON file. 
For this I have used react-hotkeys and had to install the required dependency using npm. I have also taken help from a webiste for understanding the implementation
of shortcut keys in react and taken help from Claude AI for understanding how to add shortcut keys for uploading json file. The links are provided in the AI and links section below.
Additionally, this component also have a card component which displays all the shortcut keys used in the application for user reference.

# PreprocessorTextarea.js
This is a simple component which is used for rendering the textarea for the application and is hooked in the App.js application.

# TempoControls.js
This component is responsible for rendering the tempon controls in the application and allows the user to change BPM, Conversion and Beats of the music.
The component recives props from the App.js which is then used for setting and getting the values from the main application.
This component is also hooked in the App.js for rendering and also contains the styling for the card component and input value section.

# AI and links used for this project
All the links to AI conversations are kept public for you guys to check:
Website links:
I have taken reference for download json part from the following site: https://medium.com/@gb.usmanumar/how-to-export-data-to-csv-json-in-react-js-ea45d940652a
I have taken reference for  file upload in react from the following site: https://stackoverflow.com/questions/61707105/react-app-upload-and-read-json-file-into-variable-without-a-server
I have taken refernece for shortcut key in react from the following site:https://medium.com/@aswanth6000/supercharge-your-react-apps-with-react-hotkeys-hook-f7352e0e4a69
AI links:
1. D3 Graph: https://claude.ai/share/07515c7a-257b-4fa2-94ff-bf8bb1682f43
2.Instrument Toggle Setting help: https://claude.ai/share/20ded5f3-7246-4621-a1de-cc7f45c9eb16
3. ShortCutKey json handling help: https://claude.ai/share/fac75412-fa0c-413a-b58d-c531551fdce6
