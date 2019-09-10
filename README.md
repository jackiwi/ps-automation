# ps-automation

## Installation

Install the relevant node_modules specified in package.json by running:

```bash
npm install
```

## Usage

To run **all scripts** located in test/specs, run:

```bash
npm test
```

Please note: this method will not run tasks 3 or 4 unless you have previously set the custom process environment variables USE_METHOD and NUM_SCROLLS.

To run **a specific script**, run:

npm test -- --spec=FILENAME

ex:

```bash
npm test -- --spec=task1
```

### Tasks and Respective files

All scripts are located in /test/specs .

| Task Number   | Task Objective | Filename | CLI Command | Additional Notes |
| ------------- | -------------- | -------- | ----------- | --- |
| 1: Form Authentication | Using given credentials, login and logout. | task1.js | `npm test -- --spec=task1` | n/a |
| 2: Sortable Tables | placeholder | task2.js | `npm test -- --spec=task2` | n/a |
| 3: Infinite Scroll | Take in a number and scroll to the bottom of the page that many times. | my_script.js | Using Windows PowerShell: `$env:USE_METHOD=3; $env:NUM_SCROLLS=[#]; npm test -- --spec=my_script` | Replace `[#]` with the integer number of times you would like the program to scroll. For UNIX and LINUX systems, do not include `$env` or `;`. |
| 4: Checkboxes | Click both checkboxes on the page between 1 and 10 times. | my_script.js | `$env:USE_METHOD=4; npm test -- --spec=my_script` | For UNIX and LINUX systems, do not include `$env` or `;`. |
| 5: Dropdown | Randomly select one of the options from the dropdown. | task5.js | task5.js | `npm test -- --spec=task5` | n/a |
