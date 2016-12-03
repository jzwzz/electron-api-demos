const ipc = require('electron').ipcRenderer

const selectDirBtn = document.getElementById('rw-cp-select-directory')

const formatSdCardBtn = document.getElementById('rw-cp-format-sd-card')

selectDirBtn.addEventListener('click', function (event) {
  ipc.send('open-directory-dialog')
})

ipc.on('selected-directory', function (event, path) {
  document.getElementById('rw-cp-selected-file').innerHTML = `SD card path: ${path}`
  document.getElementById('rw-cp-selected-file-value').value = `${path}`
})



formatSdCardBtn.addEventListener('click', function (event) {

  ipc.send('open-information-dialog-rw-sd-card-format')

})

ipc.on('information-dialog-selection-rw-sd-card-format', function (event, index) {

  if (index === 0) {
    alert(document.getElementById('rw-cp-selected-file-value').value)
  } else {
    alert('user canceled')
  }
})
