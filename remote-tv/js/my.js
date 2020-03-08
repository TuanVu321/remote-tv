function Remote(code) {
    this.code = code;
    this.cornect = function (tv) {
        if (this.code == tv.code) {
            true
        } else (false)
    }
}

Remote.prototype.volumeMinus = function (tv) {
    if(this.cornect()){
        tv.volume--;
    }

};
Remote.prototype.volumePlut = function (tv) {
    if(this.cornect()){
        tv.volume++;
    }
};

function Tivi(Code) {
    this.tvProgram = 1;
    this.remoteCode = Code;
    this.volume = 10;
    this.isOne = false;
    this.oneOff = function () {
        if(remote.cornect()){
            if (this.isOne) {
                this.isOne = false;
                console.log('tat tv');
            } else {
                this.isOne = true;
                console.log('bat tv');
            }
        }
    };
    this.tvProgram = function (number,remote) {
        if(remote.cornect()){
            if (this.isOne) {
                this.tvProgram = number;
                console.log('chuyen sang kenh ' + number);
            } else {
                console.log('tv dang tat');
            }
        }else{console.log('sai dieu khien');}
    }
}
