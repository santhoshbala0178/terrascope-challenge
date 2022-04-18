const { v4: uuidv4 } = require('uuid');

const memoRoutes = (app, fs) => {
    // variables
    const dataPath = './data/memo.json';

    // refactored helper methods
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
        if (err) {
            throw err;
        }

        callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
        if (err) {
            throw err;
        }

        callback();
        });
    };

    // read all memos
    app.get('/memos', (req, res) => {
        readFile(data => {
      res.send(data);
    }, true);

    });

    // Create New Memo
    app.get('/memos/new', (req, res) => {
        readFile(data => {
        // Note: this needs to be more robust for production use. 
        // e.g. use a UUID or some kind of GUID for a unique ID value.
        const date = new Date()
        const id = uuidv4();
    
        // add the new user
        data.push({id, title: '', body: '', created_date: date.toLocaleString()});
    
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send({id ,created_date: date.toLocaleString()});
        });
        }, true);
    });

    // Delete Memo
    app.post('/memos/delete', (req, res) => {
        readFile(data => {
        // Delete the memo with id
        const memoId = req.body['id'];
        newData = data.filter((item) => item.id !== memoId)
    
        writeFile(JSON.stringify(newData, null, 2), () => {
            res.status(200).send(`user id:${memoId} removed`);
        });
        }, true);
    });

    // Update Memo
    app.post('/memo/update', (req, res) => {
        readFile(data => {
        // Update the memo with id
        const memoId = req.body['id'];
        newData = data.map((item) => {
            console.log(item)
            if (item.id === memoId) {
                return {...item, ...req.body}
            }
            return item;
        });
    
        writeFile(JSON.stringify(newData, null, 2), () => {
            res.status(200).send(`user id:${memoId} Updated`);
        });
        }, true);
    });
};
  
module.exports = memoRoutes;