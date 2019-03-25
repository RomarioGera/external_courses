    function objectDeepClone(obj) {
        var newObj = {};
        for (var key in obj) {
            if (typeof obj[key] === 'object')
                newObj[key] = objectDeepClone(obj[key])

            else newObj[key] = obj[key];
        }

        return newObj;
    }
