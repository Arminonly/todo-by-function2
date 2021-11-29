import React from 'react'

export default function ItemList(props) {
  const items = props.items
  return (
    <div>
      {items.length ? (
        items.map((item) => {
            const classes = []
            if(item.complited){
                 classes.push('done')
            }
          return (
            <div key={item.key}>
              <p>
              <input
                  type='checkbox'
                  onChange={()=>props.toggledItem(item.key)}
              />
                <input
                className={classes.join(' ')}
                  type="text"
                  value={item.text}
                  onChange={(e) => props.changeValue(e.target.value, item.key)}
                />
                <span 
                onClick={()=>props.delItems(item.key)}
                style={{ cursor: 'pointer' }}>&times;</span>
              </p>
            </div>
          )
        })
      ) : (
        <div>
          <h1>No todos</h1>
        </div>
      )}
    </div>
  )
}
