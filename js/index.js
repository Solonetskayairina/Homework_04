    let hours = prompt('Enter how many hours');

    if (!hours || isNaN(hours) || hours === '') {
        alert('You can only enter numbers');
        hours = prompt('try again')
    }
    hours = Number(hours)
    let seconds = hours * 3600;

    alert(hours + 'hours =' + seconds + 'sec');
