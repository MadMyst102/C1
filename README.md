# Cashier Management System

A real-time cashier management system with Arabic interface.

## Quick Start

### Windows Users
1. Install Node.js from https://nodejs.org/
2. Double-click `start-app.bat`
3. Wait for the application to start
4. Access at http://localhost:5173
5. To stop, press any key in the command prompt

### Linux/Mac Users
1. Install Node.js from https://nodejs.org/
2. Open terminal and run:
```bash
chmod +x start-app.sh
./start-app.sh
```
3. Access at http://localhost:5173
4. To stop, press Ctrl+C

## Features
- Add and manage cashiers
- Track sales and returns
- Real-time updates across multiple computers
- Generate PDF reports
- Import/Export data
- Arabic interface

## Data Storage
- All data is automatically saved in the `data` directory:
  * `data/cashiers.json`: Stores all cashier information
  * `data/reports.json`: Stores all historical reports
- Data persists between app restarts
- All connected computers stay in sync
- Reports are saved automatically and can be accessed anytime

## Backup & Restore
1. To backup your data:
   - Click "تصدير البيانات" (Export Data)
   - Save the downloaded file
2. To restore from backup:
   - Click "استيراد البيانات" (Import Data)
   - Select your backup file

## Network Access
1. Find your IP address:
   - Windows: Run `ipconfig`
   - Linux/Mac: Run `ifconfig`
2. Other computers can access at:
   - http://YOUR_IP:5173

## Historical Reports
1. Click "عرض التقارير السابقة" (View Previous Reports)
2. Select a date from the calendar
3. View or print the report for that day
4. All reports are saved automatically
