document.onreadystatechange = () => { 
  if (document.readyState == 'complete')
  {
    const dog_rows = document.getElementById('rows');
    const dog_columns = document.getElementById('columns');
    const totaldogs = document.getElementById('total_dogs');
    const those_dogs = document.getElementById('dogs_places');
    let numrows = 0;
    let numcolumns = 0;
    let dog_count = [];
    const handledogclick = (rows_index,column_index) =>
    {
      const reqindex = numcolumns * rows_index + column_index;
      dog_count[reqindex] += 1;
      const dogcounters = document.getElementsByClassName('dogCounter');
      dogcounters[reqindex].innerText = dog_count[reqindex];
    };
    
    const handletotaldogs = () => 
    {
      dog_count = [];
      numrows = dog_rows.value;
      numcolumns = dog_columns.value;
      those_dogs.innerHTML = '';
      those_dogs.style.gridTemplateRows = `repeat(${ numrows }, 1fr)`;
      those_dogs.style.gridTemplateColumns = `repeat(${ numcolumns }, 1fr)`;
      for (let rows_index = 0; rows_index < numrows; rows_index++)
      {
        for (let column_index = 0; column_index < numcolumns; column_index++)
        {
          dog_count.push(0);
          let newdog = document.createElement('div');
          newdog.classList.add('dog_container');
          newdog.innerHTML = `
          <img class="dogImage" src="https://randomuser.me/api/portraits/men/${((rows_index*numcolumns)+column_index)%100}.jpg" alt="" srcset="">
          <br>
          <span>
            clicked this men
            <span class="dogCounter">
              0
            </span>
            times.
          </span>
          `;
          newdog.onclick = () => {
            handledogclick(rows_index,column_index);
          }
          those_dogs.appendChild(newdog);
        } 
      }     
    };
    totaldogs.onclick = handletotaldogs;
  }
};