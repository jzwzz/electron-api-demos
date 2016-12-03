const ipc = require('electron').ipcRenderer

const selectDirBtn = document.getElementById('rw-cp-select-directory')

const formatSdCardBtn = document.getElementById('rw-cp-format-sd-card')

selectDirBtn.addEventListener('click', function (event) {
  ipc.send('open-file-dialog')
})

ipc.on('selected-directory', function (event, path) {
  document.getElementById('rw-cp-selected-file').innerHTML = `SD card path: ${path}`
  document.getElementById('rw-cp-selected-file-value').innerHTML = `${path}`
})



formatSdCardBtn.addEventListener('click', function (event) {
  alert('confirm?')
})
