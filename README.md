# quantus_backend

<h2>Start Backend</h2>
<h4>Initial Database</h4>
<ul>
  <li>$ > mongo</li> 
  <li>mongo> mongo</li> 
  <li>mongo> use quantus_db</li>
  <li>mongo> db.createCollection('user')</li>
</ul>
<br>
<h4>Start Project</h4>
<ul>
  <li>$ > cd backend</li> 
  <li>backend > npm install</li> 
  <li>backend > npm start</li>
</ul>

<br>
<h4>End point list</h4>
<ul>
  <li>get All Data : http://localhost:8000/user (GET)</li> 
  <li>insert Data : http://localhost:8000/user (POST)</li> 
  <li>update Data : http://localhost:8000/user/:id (PUT)</li> 
  <li>delete data : http://localhost:8000/user/:id (DELETE)</li> 
</ul>
