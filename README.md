![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)

# NTU CZ4079 Final Year Project (Preview)
## JustGivit: A digital platform for Giving
![Showcase](/_README_asset/0.png)

## About
Waste has always been a prominent problem to solve with the limited land of Singapore. There has been plenty of existing state-of-the-art solutions that can aid in solving this problem, but it was never enough. This motivates the development of this software application called “JustGivit: A digital platform for giving”. This application helps further contribute to reducing the waste through indirect means such as donating and exchanging goods instead of disposing them directly into the trash bin. For donating, it digitizes charity operations in terms of donating unwanted and reusable goods locally in a more efficient manner and offers to reach out to wider target audiences. For exchange, it has helped reach out to those people who need them and promote reusability.

## Scope
This section will briefly highlight the scope of the system. “JustGivit” consists of various internal and external systems that are catered to different roles of users namely, **donor, exchanger, administrator, collector, and company**. Each role plays an important role to fulfill the objective of this project. Below will briefly describe their roles and the systems used for this project.
1.	The **company** will be responsible for requesting needs into the system, such that donors can donate to them respectively.
2.	The **donors** will be volunteering to donate reusable and appropriate entities towards charity organizations or needy people. 
3.	The **exchangers** are free to exchange based on both party agreement and meetup via chat, with recommended designated location after the verification process. 

These roles will not be implementing or fully implemented. It is still a required concept to assist and explain the donation and exchange process.
1.	The **administrator** will oversee monitoring the system properly to prevent the system from being compromised. 
2.	The **collectors** are tasked to collect the items requested by the donors.

## Access Guide

### Web
1.	Enter this URL in your web browser: <-Access-Forbidden-> (Please contact the creator of developer).

### Android
1. Enter this URL in your mobile browser: <-Access-Forbidden-> (Please contact the creator of developer).
2. If you have not login.
    1.	Scroll down until you see Android Icon at the footer as shown below.\
    ![Android Logo](/_README_asset/1.png)
    2.	Click the Android icon should redirect to the download APK screen.
    3.	Click on the ‘Download JustGivit’ Application as shown below, this should redirect to a SharePoint in Microsoft OneDrive’s folder.\
    ![Download App Button](/_README_asset/2.png)
    4.	Click on the ‘Download’ button, the application should prompt permission to install the application.\
    ![Download Outlook Button](/_README_asset/3.png)
3.	If you have login into the system.
    1.	At the footer of the screen, click the Android icon should redirect to the download APK screen.
    2.	Click the Android icon should redirect to the download APK screen.\
    ![Android Logo](/_README_asset/4.png)
    3.	Click on the ‘Download JustGivit’ Application as shown below, this should redirect to a SharePoint in Microsoft OneDrive’s folder.\
    ![Download App Button](/_README_asset/5.png)
    4.	Click on the ‘Download’ button, the application should prompt permission to install the application.\
    ![Download Outlook Button](/_README_asset/6.png)

## Source Code Guide

### Setup Flutter
1.	Follow closely the given guideline provided by the Flutter team: https://flutter.dev/docs/get-started/install, the instruction easy to follow.
2.	Alternatively, my approach would be as follow (Window friendly only) :
    1.	Download the Flutter SDK package from the link above
    2.	Place in this recommended directory as shown\
    ![Directory](/_README_asset/7.png)
    3.	Make sure ENV PATH is set up, such that the terminal can recognise the Flutter SDK package as shown below, this can be accessed via Edit Variables -> System Variables Section -> Click on ‘Path’ variable and press ‘Edit’ at the lower right of the Environment Variable window.\
    ![Environment Variable](/_README_asset/8.png)
    4.	Once done, to test if it is working open command prompt (CMD) type ‘flutter doctor’. If there is instruction just follow accordingly.\
    ![Command Prompt](/_README_asset/9.png)
    \This output requirement below should be sufficient to run this project\
    ![Command Prompt](/_README_asset/10.png)

### Setup Android Simulator
1.	Install Android Studio software.
2.	Create a Virtual Device: https://developer.android.com/studio/run/managing-avds#createavd.
3.	May need to enable Virtual Technologies in BIOS of the computer: https://stackoverflow.com/questions/39542853/enable-vt-x-in-your-bios-security-settings-refer-to-documentation-for-your-comp.
4.	To check if it is working try running it.

### Setup VSCode
1.	Create a directory of your naming folder.
2.	Download the JustGivit’s source code.
3.	Unzip and paste them into the directory you created in Step 1.
4.	Install and open VSCode software.
5.	Install Flutter and Firebase supported Extension on VSCode’s Extension Workshop as shown below:\
![Extension](/_README_asset/11.png)\
![Extension](/_README_asset/12.png)\
![Extension](/_README_asset/13.png)\
![Extension](/_README_asset/14.png)\
![Extension](/_README_asset/15.png)\
![Extension](/_README_asset/16.png)
6.	At the top left corner of the VSCode window select ‘File’ -> ‘Add Folder as workspace’.
7.	A directory selection window should pop-up.
8.	Navigate to the directory folder u created in Step 1.
9.	Once done, press this icon below to check if the repository has been installed.\
![Copy Icon](/_README_asset/17.png)
10.	Once done, you should see this directory in the explorer section as shown below.\
![Explorer](/_README_asset/18.png)\
![Explorer](/_README_asset/19.png)
11.	Select and right-click ‘NTU_FYP_JustGivit’ at explorer.
12.	Select ‘Open in Integrated Terminal’.
13.	A terminal window should open up at the bottom of the screen as shown below.\
![Terminal](/_README_asset/20.png)
(Note: Can have multiple terminals by repeat step 11 again, useful if you want to run multiple platforms concurrently)
14.	(Optional) Setup version control software such as Github, SVN, Git, etc. Git and Github Instructions: https://www.jcchouinard.com/install-git-in-vscode 
15.	This point will require to set up properly on the Android platform (android folder) and Web platform (web folder). This requires some extensive trial and error for beginners and expect unresolved issues and Flutter and Android compatibility issues. At the point of writing this, Flutter has recently release ver 2.0 which moving web support to a stable version from the beta version. I believe should be easier now. Key things to consider below:
    1.	Android: SDK Support, Dependencies, Gradle, Native Permission, Logo.
    2.	Web: Javascript, HTML, CSS Support settings (if needed), Logo.

### Setup Firebase
1.	Create a Firebase account
2.	Follow the instruction will do: 
https://firebase.google.com/docs/flutter/setup 
Other useful links: 
https://flutter.dev/docs/development/data-and-backend/firebase 
3.	Make sure it is set up on both side:
1.	Firebase’s Console Setup respective services.
2.	VSCode Setup Firebase to run support flutter with firebase and allow your firebase to recognise your Flutter’s workspace.
4.	May require a bit of trial and error for it to work well as sometimes they may have bugs in the latest version on Firebase or Flutter.

### Execute Web
1.	Flutter Debug
    1.	Ensure your terminal current directory is pointing the same as ‘Setup VSCode’s Step 14’.
    2.	At Integrated terminal type ‘flutter run -d chrome --web-port (YOUR PORT NUM) --web-renderer html’. This will fire up a chrome web browser with localhost and an assigned port number. (Note: The performance is expected to be worst compare to Firebase Local Hosting as it is running on debug mode, press ‘r’ at the terminal for ‘Hot Reload’, ‘R’ at the terminal for ‘Hard Refresh’, ‘q’ to exit) 
2.	Firebase Local Hosting
    1.	Ensure your firebase is set up correctly in ‘Setup Firebase’.
    2.	Ensure your terminal current directory is pointing the same as ‘Setup VSCode’s Step 14’.
    3.	At Integrated terminal type ‘firebase serve –only hosting’. This will fire up a chrome web browser with localhost and an assigned port number. (Note: Make sure you re-run compiled file to update the changes correctly, press CTRL+C to exit) 
3.	Firebase Deploy Hosting
    1.	Ensure your firebase is set up correctly in ‘Setup Firebase’.
    2.	Ensure your terminal current directory is pointing the same as ‘Setup VSCode’s Step 14’.
    3.	At Integrated terminal type ‘firebase deploy –only hosting’. This deploys and published to your firebase hosting and access the given URL or your custom domain name to access. (Note: It takes a while for firebase hosting to update the changes. Make sure you re-run compiled file to update the changes correctly. Best to test if there is an update via access in incognito mode as it does not hold any browser cache data)

### Execute Android
1.	Simulator
    1.	Ensure Android Simulator is set up properly.
    2.	Ensure the bottom right of the VSCode window is the mobile name of the simulator by select and choose the options. This should fire up the simulator application.\
    ![Android Simulator](/_README_asset/21.png)
    3.	Ensure your terminal current directory is pointing the same as ‘Setup VSCode’s Step 14’.
    4.	At Integrated terminal type ‘flutter run’. (Note: It should take some time to install dependent on your computer processor speed)
2.	Android Phone
    1.	Ensure Android Simulator is set up properly.
    2.	Ensure your supported android device is plug into the computer via USB wire
    3.	Ensure the bottom right of the VSCode window is the mobile name of your device by select and choose the options.\
    ![Android Device](/_README_asset/22.png)
    4.	Ensure your terminal current directory is pointing the same as ‘Setup VSCode’s Step 14’.
    5.	At Integrated terminal type ‘flutter run’. (Note: It should take some time to install dependent on your mobile processor speed)

### Common Integrated Terminal Commands
Re-build respective platform compiled file
1.	flutter clean                            // clear compiled files in the build directory
2.	flutter build web                        // build compiled code for web
3.	flutter build appbundle                  // build compiled code for android (App Bundle format)
4.	flutter build apk --split-per-abi        // build compiled code for android (APK format)

## Test Guide
1.	Enter this URL in your web browser: justgivit-7ec8a.firebaseapp.com or Access via “JustGivit” Application on Android phone.
2.	At the footer of the screen, click on the ‘Developer’ button as shown below, this would redirect to the developer screen.\
![Developer Button](/_README_asset/23.png)
3.	Click on the hidden ‘Sample Data’ icon in the web platform as shown below, this will repopulate or create data at the Firebase database.\
![Snapshot of Dev Screen](/_README_asset/23.png)
4.	The terminal console will print the output if lib/data/conf/dev.dart, boolean variable ‘DEBUG’ is value ‘true’.

## Disclaimer
This project at the current state materials includes images and icons is intended use for education, no copyright infringement is intended. These images and icons include all images used in this JustGivit project **except the developer’s assets which is developer representative self-image and logo image representative of this product**.

## Documentation
Published in NTU's E-Library (DR_NTU)\
https://hdl.handle.net/10356/148051

## Credits
I would like special thanks to Flutter’s community, creating such wonderful libraries to speed up the development process.

## Acknowledgement
I would like to express my special thanks of gratitude to my supervisor, **Dr. Own Noel Newton Fernando**, for the endless support and aid he provided me towards the completion of this final year project. His continuous efforts and positive attitude towards me have made the success of this project possible.

## Version
beta-v0.1


