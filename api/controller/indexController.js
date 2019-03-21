exports.getIndex = function (req, res) {

    data = {
      'status': 'success',
      'message': 'Grooming'
    }
    res.status(201).json(data);
  };
  