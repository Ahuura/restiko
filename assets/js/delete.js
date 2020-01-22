function deleteRestiko(restikoId) {

    base('RESTIKO').destroy(restikoId, function (err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Deleted', restikoId, 'records');
    });
    $("#restikoId").remove();
    setTimeout(function () {
      document.location.reload(true);
    }, 500);
  
  }