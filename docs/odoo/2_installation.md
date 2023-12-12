---
sidebar_position: 2
---

# Installation

## System Requirements

Before you begin installing and using Odoo, it's important to ensure that your system meets the necessary requirements. This section outlines the hardware, software, and other prerequisites for a smooth Odoo experience.

## Install System Dependencies

Make sure your system has the required dependencies. The following commands are for a Ubuntu-based system:

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python3-pip python3-dev libxml2-dev libxslt1-dev zlib1g-dev libsasl2-dev libldap2-dev build-essential libjpeg-dev libpq-dev libjpeg8-dev liblcms2-dev git
```

other lib

```
wget
python3-venv
python3-wheel
libfreetype6-dev
libzip-dev
python3-setuptools
node-less
libtiff5-dev
libopenjp2-7-dev
libwebp-dev
libharfbuzz-dev
libfribidi-dev
libxcb1-dev
libssl-dev
libffi-dev
libmysqlclient-dev
libblas-dev
libatlas-base-dev
```

## Install and Configure PostgreSQL

Odoo requires a database, and PostgreSQL is recommended. Install PostgreSQL and create a user and database for Odoo:

```
sudo apt-get install postgresql
sudo su - postgres
createuser --createdb --username postgres --no-createrole --no-superuser --pwprompt odoo
createdb --username=postgres --owner=odoo --encoding='UTF-8' --locale=en_US.utf8 --template=template0 --template=template1 --template=template0 --template=template1 odoo
exit
```

## Install Wkhtmltopdf

Odoo uses Wkhtmltopdf for generating PDF reports. Install it:

```
sudo apt-get install wkhtmltopdf
```

## Create a system user for Odoo

Create a system user for Odoo to run as a service:

```
sudo adduser --system --home=/opt/odoo --group odoo
```

## Install and Setup Virtual Environment

Create a virtual environment and install the required Python libraries:

```
sudo pip3 install virtualenv
sudo su - odoo -s /bin/bash
cd /opt/odoo
virtualenv odoo-venv
source odoo-venv/bin/activate
```

## Clone Odoo Repository

Clone the Odoo source code from the official repository:

```
git clone https://www.github.com/odoo/odoo --depth 1 --branch 15.0 --single-branch .
```

## Install Odoo Dependencies

Install the required Python packages:

```
pip3 install -r /opt/odoo/requirements.txt
```

## Configure Odoo

Create a configuration file for Odoo:

```
cp /opt/odoo/debian/odoo.conf /etc/odoo.conf

```

Edit the configuration file:

```
nano /etc/odoo.conf
```

Update the following parameters:

```
[options]
; This is the password that allows database operations:
admin_passwd = admin
db_host = False
db_port = False
db_user = odoo
db_password = False
addons_path = /opt/odoo/addons
logfile = /var/log/odoo/odoo.log
```

## Create Log Directory

Create a log directory for Odoo:

```
sudo mkdir /var/log/odoo
sudo chown odoo:root /var/log/odoo
```

## Set Permissions

Set the correct permissions for the Odoo directory:

```
sudo chown -R odoo: /opt/odoo
sudo chmod -R 755 /opt/odoo
```

## Start Odoo

Start Odoo:

```
/opt/odoo/odoo-venv/bin/python3 /opt/odoo/odoo-bin -c /etc/odoo.conf
```

Now, you should be able to access Odoo by navigating to http://localhost:8069 in your web browser.

## Setup Odoo as a Systemd Service (Optional)

To run Odoo as a systemd service and start it automatically on system boot:

Create a systemd service file:

```
sudo nano /etc/systemd/system/odoo.service
```

Add the following content:

```
[Unit]
Description=Odoo
Documentation=http://www.odoo.com

[Service]
# Ubuntu/Debian convention:
Type=simple
User=odoo
ExecStart=/opt/odoo/odoo-venv/bin/python3 /opt/odoo/odoo-bin -c /etc/odoo.conf

[Install]
WantedBy=default.target
```

Save the file and then run:

```
sudo systemctl daemon-reload
sudo systemctl enable odoo.service
sudo systemctl start odoo.service
```

Now, Odoo should be running as a systemd service. You can check the status using:

```
sudo systemctl status odoo.service
```

That's it! You have successfully installed and configured Odoo using a Python virtual environment.
