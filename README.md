# Music-Controller-App
A Spotify integrated, music multiplayer application using Django and React.

## Setup

### Install the required modules and get the source code

```
pip install -r requirements.txt

git clone https://github.com/PradHolla/Music-Controller-App.git

cd Music-Controller-App
```

### Start the web server
```python
python .\manage.py runserver
```

### Node Modules
Before installing the node modules, [Node.js](https://nodejs.org/en/) has to be installed.

Once it is installed, go to the `frontend` folder and install the dependencies:
```
cd frontend

npm i
```

### Compile the Front-End
You can either build the project or run it for development:
```
npm run build

or

npm run dev
```

## Hosting in a LAN
Apart from the hosting with `python ./manage.py runserver`, the server can also be hosted in your Local Area Network too. 
Start the web server as:
```python
python .\manage.py runserver 0.0.0.0:8000
```
Before connecting to your web server, you have to include your IP Address in `controller/settings.py` at line 28 under `ALLOWED_HOSTS`. (Enter `ipconfig` to find out your IPV4 Address)

To connect to the server, enter `Your IP Address:8000` in your mobile device.
