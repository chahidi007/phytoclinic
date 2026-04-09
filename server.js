const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Route de suppression de compte
app.get('/api/delete-account', (req, res) => {
  const lang = req.query.lang === 'ar' ? 'ar' : 'fr';
  const email = 'phytoclinicsv@gmail.com';
  
  const html = `<!DOCTYPE html>
<html dir="${lang === 'ar' ? 'rtl' : 'ltr'}" lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phytoclinic - Suppression de compte</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 800px; margin: auto; padding: 20px; }
        .warning { background: #ffeb3b; padding: 15px; border-radius: 5px; }
        .email { background: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 20px; }
        .lang-switch { text-align: center; margin-bottom: 20px; }
        a { color: #4CAF50; text-decoration: none; margin: 0 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="lang-switch">
            <a href="?lang=fr">Français</a> | <a href="?lang=ar">العربية</a>
        </div>
        <h1>${lang === 'ar' ? 'حذف الحساب والبيانات' : 'Suppression de compte et de données'}</h1>
        <div class="warning">
            <strong>⚠️ ${lang === 'ar' ? 'تحذير مهم' : 'Attention'}</strong><br>
            ${lang === 'ar' ? 'حذف حسابك نهائي ولا يمكن التراجع عنه' : 'La suppression de votre compte est définitive et irréversible'}
        </div>
        <div class="email">
            📧 ${lang === 'ar' ? 'للإستفسار :' : 'Contactez-nous :'}<br>
            <a href="mailto:${email}">${email}</a>
        </div>
    </div>
</body>
</html>`;
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Route racine
app.get('/', (req, res) => {
  res.json({ 
    message: 'Phytoclinic API',
    endpoints: {
      deleteAccount: '/api/delete-account',
      health: '/health'
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});