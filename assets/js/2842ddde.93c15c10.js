"use strict";(self.webpackChunkhub=self.webpackChunkhub||[]).push([[4175],{6829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(5893),a=t(1151);const o={sidebar_position:2},r="Installation",i={id:"magento/getting_started/installation",title:"Installation",description:"System Requirements",source:"@site/docs/magento/1_getting_started/2_installation.md",sourceDirName:"magento/1_getting_started",slug:"/magento/getting_started/installation",permalink:"/docs/magento/getting_started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/magento/1_getting_started/2_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"magento",previous:{title:"Tutorial Intro",permalink:"/docs/magento/getting_started/"},next:{title:"Introduction",permalink:"/docs/magento/understand_the_basics"}},l={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Update and Upgrade",id:"update-and-upgrade",level:2},{value:"Install LAMP Stack",id:"install-lamp-stack",level:2},{value:"Configure MySQL",id:"configure-mysql",level:2},{value:"Install Composer",id:"install-composer",level:2},{value:"Download Magento",id:"download-magento",level:2},{value:"Database Setup",id:"database-setup",level:2},{value:"Web Server Configuration",id:"web-server-configuration",level:2},{value:"Install Magento",id:"install-magento",level:2},{value:"Post-Installation Tasks",id:"post-installation-tasks",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Before diving into the installation, it's crucial to ensure that your server meets the necessary requirements for Magento 2.4.6. Here's a brief overview:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Web Server :"})," Apache 2.4 or Nginx 1.x"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Database :"})," MySQL 8.0 or MariaDB 10.4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PHP :"})," 7.4.x"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SSL :"})," A valid SSL certificate is highly recommended for secure transactions."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"update-and-upgrade",children:"Update and Upgrade"}),"\n",(0,s.jsx)(n.p,{children:"Before starting, make sure your system is up to date:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-lamp-stack",children:"Install LAMP Stack"}),"\n",(0,s.jsx)(n.p,{children:"Install the Apache web server, MySQL database server, and PHP:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt install apache2 mysql-server php libapache2-mod-php php-mysql php-cli php-curl php-gd php-intl php-json php-xml php-zip php-mbstring unzip\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start and enable Apache and MySQL to run on system boot:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl start apache2\nsudo systemctl enable apache2\nsudo systemctl start mysql\nsudo systemctl enable mysql\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-mysql",children:"Configure MySQL"}),"\n",(0,s.jsx)(n.p,{children:"Secure your MySQL installation and set a root password:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo mysql_secure_installation\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-composer",children:"Install Composer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt install composer\n"})}),"\n",(0,s.jsx)(n.h2,{id:"download-magento",children:"Download Magento"}),"\n",(0,s.jsx)(n.p,{children:"Create a directory for your Magento installation and navigate into it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mkdir magento\ncd magento\n"})}),"\n",(0,s.jsx)(n.p,{children:"Download Magento using Composer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition=2.4.6.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"database-setup",children:"Database Setup"}),"\n",(0,s.jsx)(n.p,{children:"Create a MySQL database and user for Magento:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo mysql -u root -p\n\n# Inside MySQL prompt\nCREATE DATABASE magento;\nCREATE USER 'magento'@'localhost' IDENTIFIED BY 'your_password';\nGRANT ALL PRIVILEGES ON magento.* TO 'magento'@'localhost';\nFLUSH PRIVILEGES;\nEXIT;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"web-server-configuration",children:"Web Server Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Configure Apache to serve your Magento site:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo nano /etc/apache2/sites-available/magento.conf\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add the following configuration, adjusting paths and domain as needed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<VirtualHost *:80>\n    ServerAdmin webmaster@yourdomain.com\n    DocumentRoot /var/www/html/magento\n    ServerName yourdomain.com\n    <Directory /var/www/html/magento/>\n        Options Indexes FollowSymLinks\n        AllowOverride All\n        Require all granted\n    </Directory>\n    ErrorLog ${APACHE_LOG_DIR}/error.log\n    CustomLog ${APACHE_LOG_DIR}/access.log combined\n</VirtualHost>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enable the site and restart Apache:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo a2ensite magento.conf\nsudo systemctl restart apache2\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-magento",children:"Install Magento"}),"\n",(0,s.jsxs)(n.p,{children:["Open your browser and navigate to ",(0,s.jsx)(n.a,{href:"http://yourdomain.com",children:"http://yourdomain.com"}),". The Magento Installation Wizard should appear. Follow the on-screen instructions, providing the database details and configuring your store."]}),"\n",(0,s.jsx)(n.h2,{id:"post-installation-tasks",children:"Post-Installation Tasks"}),"\n",(0,s.jsx)(n.p,{children:"Once the installation is complete, run the following commands in the Magento root directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"bin/magento setup:upgrade\nbin/magento setup:di:compile\nbin/magento setup:static-content:deploy -f\nbin/magento cache:flush\n"})}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! You've successfully installed Magento 2.4.6 on Ubuntu. You can now access the admin panel and start customizing your online store."})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(7294);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);