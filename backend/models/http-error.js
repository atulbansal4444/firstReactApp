class HttpError extends Error {
    constructor(message, statuCode) {
        super(message);
        this.code = statuCode;
    }
};

module.exports = HttpError;
