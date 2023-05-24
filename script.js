function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        var timeString =
          hours.toString().padStart(2, '0') +
          ':' +
          minutes.toString().padStart(2, '0') +
          ':' +
          seconds.toString().padStart(2, '0');
        document.getElementById('time').innerHTML = timeString;
      }

      setInterval(updateTime, 1000);