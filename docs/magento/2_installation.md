---
sidebar_position: 2
---

# Installation

## System Requirements

Before diving into the installation, it's crucial to ensure that your server meets the necessary requirements for Magento 2.4.6. Here's a brief overview:

- **Web Server :** Apache 2.4 or Nginx 1.x
- **Database :** MySQL 8.0 or MariaDB 10.4
- **PHP :** 7.4.x
- **SSL :** A valid SSL certificate is highly recommended for secure transactions.

## Update and Upgrade

Before starting, make sure your system is up to date:

```
sudo apt update
sudo apt upgrade
```

## Install LAMP Stack

Install the Apache web server, MySQL database server, and PHP:

```
sudo apt install apache2 mysql-server php libapache2-mod-php php-mysql php-cli php-curl php-gd php-intl php-json php-xml php-zip php-mbstring unzip
```

Start and enable Apache and MySQL to run on system boot:

```
sudo systemctl start apache2
sudo systemctl enable apache2
sudo systemctl start mysql
sudo systemctl enable mysql
```

## Configure MySQL

Secure your MySQL installation and set a root password:

```
sudo mysql_secure_installation
```

## Install Composer

```
sudo apt install composer
```

## Download Magento

Create a directory for your Magento installation and navigate into it:

```
mkdir magento
cd magento
```

Download Magento using Composer:

```
composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.4.6.
```

## Database Setup

Create a MySQL database and user for Magento:

```
sudo mysql -u root -p

# Inside MySQL prompt
CREATE DATABASE magento;
CREATE USER 'magento'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON magento.* TO 'magento'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Web Server Configuration

Configure Apache to serve your Magento site:

```
sudo nano /etc/apache2/sites-available/magento.conf
```

Add the following configuration, adjusting paths and domain as needed:

```
<VirtualHost *:80>
    ServerAdmin webmaster@yourdomain.com
    DocumentRoot /var/www/html/magento
    ServerName yourdomain.com
    <Directory /var/www/html/magento/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Enable the site and restart Apache:

```
sudo a2ensite magento.conf
sudo systemctl restart apache2
```

## Install Magento

Open your browser and navigate to http://yourdomain.com. The Magento Installation Wizard should appear. Follow the on-screen instructions, providing the database details and configuring your store.

## Post-Installation Tasks

Once the installation is complete, run the following commands in the Magento root directory:

```
bin/magento setup:upgrade
bin/magento setup:di:compile
bin/magento setup:static-content:deploy -f
bin/magento cache:flush
```

Congratulations! You've successfully installed Magento 2.4.6 on Ubuntu. You can now access the admin panel and start customizing your online store.
