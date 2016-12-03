const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('open-information-dialog-rw-sd-card-format', function (event) {
  const options = {
    type: 'warning',
    title: 'Format Sd Card1',
    message: "This will format the SD card?",
    buttons: ['Yes', 'No'],
    properties: ['openDirectory'],
  }
  dialog.showMessageBox(options, function (index) {
    event.sender.send('information-dialog-selection-rw-sd-card-format', index)
  })
})
