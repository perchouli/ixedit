ixedit
======

IxEdit is a JavaScript-based interaction design tool for the web. With IxEdit, designers can practice DOM-scripting without coding to change, add, move, or transform elements dynamically on your web pages. Especially, IxEdit must be useful to try various interactions rapidly in the prototyping phase of your web application.

### The project is compatible with those browsers.

- Firefox 12.0

- Chrome 19.0.1084.46

### Install

> <script type="text/javascript" src="../jquery/jquery-plus-jquery-ui.js"></script>
> <script type="text/javascript" src="../ixedit.js"></script>
> <link type="text/css" rel="stylesheet" charset="utf-8" href="../ixedit.css">
> <link type="text/css" rel="stylesheet" charset="utf-8" href="../ui-sui.css">

### Basic operation flow

The basic flow to create interactions with IxEdit is like follows.

1. Click “New” button in the list view to open the edit view to make a new interaction.
2. In the action edit area, specify an event and target element(s) as the trigger of interaction.
3. In the reaction edit area, specify a command and its parameters. You can make multiple reactions for one action.
4. If the reaction(s) should be executed under certain condition, specify it in the condition edit area.
5. Write comment in the comment edit area as you want.
6. Click “Done” button to save the interaction you created. IxEdit Dialog switches back to the list view.
7. Repeat the process as many times as needed.
8. When you are done, choose “Deploy” from the routing menu to get the final JavaScript code.
9. Embed the generated code in the HTML.