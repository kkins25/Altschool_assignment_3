function ServiceProviderChecker() {
    const networkProviderStore = {
        "mtn": [
            '0803', '0806', '0703', '0706',
            '0813', '0816', '0810', '0814',
            '0903', '0906',
        ],
        "airtel": [
            '0802', '0808', '0708',
            '0812', '0701', '0902',
        ],
        "glo": [
            '0805', '0807', '0705',
            '0815', '0811', '0905',
        ],
        "etisalat": ['0809', '0818', '0817', '0909',]
    };
    const getNetworkProvider = (first4Num) => {
        const networkProviders = Object.keys(networkProviderStore);
        for (let i = 0; i < networkProviders.length; i++) {
            const networkProvider = networkProviders[i];
            const numbersProvidedByNetwork = networkProviderStore[networkProvider];
            const isNumberProvided = numbersProvidedByNetwork.some(num => num === first4Num);

            if (isNumberProvided) return networkProvider;
        }

        return null;
    };
    const isNetworkProviderNumber = (first4Num, networkProvider) => {
        const numbersProvidedByNetwork = networkProviderStore[networkProvider];
        const isNumberProvided = numbersProvidedByNetwork.some(num => num === first4Num);

        return isNumberProvided;
    };
    const getFirst4Num = (phoneNumber) => {
        const firstChar = phoneNumber[0];
        const isLongEnough = firstChar === '+' ? phoneNumber.length >= 7 : phoneNumber.length >= 4;
        const isValiedFirstChar = firstChar === '+' || firstChar === '0';
        if (!isLongEnough || !isValiedFirstChar) return null;

        let cleanNum = phoneNumber;
        if (firstChar === '+') {
            cleanNum = phoneNumber.replace('+234', '');
        }

        cleanNum = cleanNum[0] == '0' ? cleanNum : `0${cleanNum}`;
        return cleanNum.slice(0, 4);
    };

    const form = document.getElementById("form1")

    return {
        getNetworkProvider,
        getFirst4Num,
        isNetworkProviderNumber,
    }
};
function DOMWorker() {
    const networkColours = {
        "mtn": "#f7eb07",
        "airtel": "red",
        "glo": "green",
        "etisalat": "green"
    }
    const networkSelect = document.getElementById("network");
    const changeNetworkStyle = (networkProvider) => {
        const form = document.getElementById('form1');
        form.style.boxShadow = `5px 5px 10px 10px ${networkColours[networkProvider]}`;

        networkSelect.value = (networkProvider);
        document
            .querySelectorAll('.team')
            .forEach((teamBg) => {
                teamBg.style.backgroundColor = networkColours[networkProvider];
            });
    };

    return {
        networkSelect,
        changeNetworkStyle,
    }
};
const domInit = () => {
    const domWorker = DOMWorker();
    const phoneNumberInput = document.getElementById("universal");
    phoneNumberInput.addEventListener('input', (e) => {
        const phoneNumber = e.target.value;
        const s = ServiceProviderChecker();
        const first4Num = s.getFirst4Num(phoneNumber);
        if (!first4Num) return;

        if (domWorker.networkSelect.value === '') {
            const networkProvider = s.getNetworkProvider(first4Num);
            if (!networkProvider) alert("We don't have your network. Go and meet Cherish to help you.");
            else domWorker.changeNetworkStyle(networkProvider);
        } else {
            const networkProvider = domWorker.networkSelect.value;
            const isValidNumber = s.isNetworkProviderNumber(first4Num, networkProvider);

            if (!isValidNumber) alert("Shey we warned you to go and meet Cherish!!!");
        }
    });
};
/**
 * @todo The logo
 * @todo The pattern validation
 * @todo Team background
 * @todo Adjust the team text
 * @todo Suggestion Thingy
 * @
 */
