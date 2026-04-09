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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Phytoclinic - ${lang === 'ar' ? 'حذف الحساب' : 'Suppression de compte'}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 28px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05);
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .container:hover {
            transform: translateY(-4px);
        }
        
        .header {
            background: linear-gradient(135deg, #1a5f2a 0%, #2e7d32 100%);
            color: white;
            padding: 45px 35px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: "🌿";
            position: absolute;
            font-size: 140px;
            opacity: 0.08;
            bottom: -40px;
            right: -30px;
            pointer-events: none;
        }
        
        .header::after {
            content: "🌱";
            position: absolute;
            font-size: 100px;
            opacity: 0.08;
            top: -20px;
            left: -20px;
            pointer-events: none;
        }
        
        .header h1 {
            font-size: 36px;
            margin-bottom: 12px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            font-size: 17px;
            opacity: 0.92;
        }
        
        .lang-switch {
            text-align: center;
            padding: 18px;
            background: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
        }
        
        .lang-switch a {
            color: #2e7d32;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 30px;
            transition: all 0.3s ease;
            display: inline-block;
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .lang-switch a:hover {
            background: #2e7d32;
            color: white;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(46,125,50,0.3);
        }
        
        .content {
            padding: 45px;
        }
        
        .warning-box {
            background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
            border-left: 5px solid #ff9800;
            padding: 22px 25px;
            border-radius: 20px;
            margin-bottom: 40px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .warning-box strong {
            color: #e65100;
            font-size: 18px;
            display: block;
            margin-bottom: 10px;
        }
        
        .warning-box p {
            color: #5d4037;
            font-size: 15px;
            line-height: 1.6;
        }
        
        .procedure {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            padding: 30px;
            border-radius: 24px;
            margin-bottom: 40px;
            border: 1px solid #bbf7d0;
        }
        
        .procedure h2 {
            color: #166534;
            margin-bottom: 25px;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .procedure ol {
            margin-left: 25px;
            margin-right: 25px;
        }
        
        .procedure li {
            margin: 16px 0;
            line-height: 1.7;
            color: #14532d;
            font-size: 15px;
        }
        
        .data-table {
            margin: 35px 0;
        }
        
        .data-table h2 {
            color: #166534;
            margin-bottom: 20px;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        
        th {
            background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
            color: white;
            padding: 16px;
            font-weight: 600;
            font-size: 15px;
            text-align: left;
        }
        
        td {
            padding: 14px 16px;
            border-bottom: 1px solid #e9ecef;
            background: white;
            color: #333;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        tr:hover td {
            background: #f8f9fa;
        }
        
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .badge-deleted {
            background: #fee2e2;
            color: #dc2626;
        }
        
        .badge-retained {
            background: #e0f2fe;
            color: #0284c7;
        }
        
        .email-box {
            background: linear-gradient(135deg, #e3f2fd 0%, #bbdef5 100%);
            padding: 30px;
            border-radius: 24px;
            text-align: center;
            margin-top: 35px;
        }
        
        .email-box p {
            margin-bottom: 15px;
            color: #1565c0;
            font-weight: 500;
            font-size: 16px;
        }
        
        .email-box a {
            color: #0d47a1;
            text-decoration: none;
            font-size: 20px;
            font-weight: 700;
            background: white;
            padding: 12px 28px;
            border-radius: 50px;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .email-box a:hover {
            background: #1565c0;
            color: white;
            transform: scale(1.02);
            box-shadow: 0 6px 16px rgba(21,101,192,0.3);
        }
        
        .footer {
            background: #f8f9fa;
            padding: 25px;
            text-align: center;
            color: #6c757d;
            font-size: 13px;
            border-top: 1px solid #e9ecef;
        }
        
        @media (max-width: 768px) {
            .container {
                border-radius: 20px;
            }
            .header {
                padding: 30px 20px;
            }
            .header h1 {
                font-size: 26px;
            }
            .content {
                padding: 25px;
            }
            .procedure ol {
                margin-left: 15px;
                margin-right: 15px;
            }
            .procedure li {
                font-size: 14px;
            }
            table, thead, tbody, th, td, tr {
                display: block;
            }
            th {
                position: absolute;
                top: -9999px;
                left: -9999px;
            }
            td {
                position: relative;
                padding-left: 45%;
                text-align: right;
                min-height: 52px;
            }
            td:before {
                content: attr(data-label);
                position: absolute;
                left: 12px;
                width: 40%;
                font-weight: 600;
                text-align: left;
            }
        }
        
        @media (max-width: 480px) {
            .content {
                padding: 20px;
            }
            .lang-switch a {
                margin: 0 8px;
                padding: 6px 14px;
                font-size: 14px;
            }
            .header h1 {
                font-size: 22px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌿 Phytoclinic</h1>
            <p>${lang === 'ar' ? 'نصائح زراعية متخصصة' : 'Conseils agricoles spécialisés'}</p>
        </div>
        <div class="lang-switch">
            <a href="?lang=fr">🇫🇷 Français</a>
            <a href="?lang=ar">🇸🇦 العربية</a>
        </div>
        <div class="content">
            <div class="warning-box">
                <strong>⚠️ ${lang === 'ar' ? 'تنبيه مهم' : 'Attention importante'}</strong>
                <p>${lang === 'ar' ? 'حذف حسابك نهائي ولا يمكن التراجع عنه. سيتم حذف جميع بياناتك بشكل دائم.' : 'La suppression de votre compte est définitive et irréversible. Toutes vos données seront définitivement effacées.'}</p>
            </div>

            <div class="procedure">
                <h2>📋 ${lang === 'ar' ? 'إجراءات طلب حذف الحساب' : 'Procédure de demande de suppression'}</h2>
                <ol>
                    <li>${lang === 'ar' ? 'افتح تطبيق Phytoclinic على هاتفك وقم بتسجيل الدخول إلى حسابك.' : 'Ouvrez l\'application Phytoclinic sur votre appareil et connectez-vous à votre compte.'}</li>
                    <li>${lang === 'ar' ? 'انتقل إلى علامة تبويب الملف الشخصي (الأيقونة في أسفل اليمين).' : 'Accédez à l\'onglet Profil (icône en bas à droite de l\'écran).'}</li>
                    <li>${lang === 'ar' ? 'قم بالتمرير إلى الأسفل وانقر على "طلب حذف حسابي وبياناتي".' : 'Faites défiler jusqu\'en bas et appuyez sur « Demander la suppression de mon compte et mes données ».'}</li>
                    <li>${lang === 'ar' ? 'أكد طلبك في مربع الحوار الذي يظهر.' : 'Confirmez votre demande dans la boîte de dialogue qui s\'affiche.'}</li>
                    <li>${lang === 'ar' ? 'سيتم فتح تطبيق البريد الإلكتروني تلقائياً مع رسالة معبأة مسبقاً.' : 'Votre client email s\'ouvrira automatiquement avec un message pré-rempli.'}</li>
                    <li>${lang === 'ar' ? 'بدلاً من ذلك، يمكنك إرسال بريد إلكتروني مباشرة إلى عنوان البريد الإلكتروني أدناه.' : 'Alternativement, vous pouvez envoyer directement un email à l\'adresse ci-dessous.'}</li>
                </ol>
            </div>

            <div class="data-table">
                <h2>🗑️ ${lang === 'ar' ? 'البيانات المحذوفة والمحفوظة' : 'Données supprimées et conservées'}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>${lang === 'ar' ? 'نوع البيانات' : 'Type de données'}</th>
                            <th>${lang === 'ar' ? 'الإجراء' : 'Action'}</th>
                            <th>${lang === 'ar' ? 'المهلة' : 'Délai'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="${lang === 'ar' ? 'نوع البيانات' : 'Type de données'}">${lang === 'ar' ? 'حساب المستخدم (الاسم، الهاتف، كلمة المرور)' : 'Compte utilisateur (nom, téléphone, mot de passe)'}</td>
                            <td data-label="${lang === 'ar' ? 'الإجراء' : 'Action'}"><span class="badge badge-deleted">${lang === 'ar' ? 'محذوف' : 'Supprimé'}</span></td>
                            <td data-label="${lang === 'ar' ? 'المهلة' : 'Délai'}">${lang === 'ar' ? 'خلال 30 يوماً' : 'Dans les 30 jours'}</td>
                        </tr>
                        <tr>
                            <td data-label="${lang === 'ar' ? 'نوع البيانات' : 'Type de données'}">${lang === 'ar' ? 'الاستشارات وتبادل الرسائل' : 'Consultations et échanges de messages'}</td>
                            <td data-label="${lang === 'ar' ? 'الإجراء' : 'Action'}"><span class="badge badge-deleted">${lang === 'ar' ? 'محذوف' : 'Supprimé'}</span></td>
                            <td data-label="${lang === 'ar' ? 'المهلة' : 'Délai'}">${lang === 'ar' ? 'خلال 30 يوماً' : 'Dans les 30 jours'}</td>
                        </tr>
                        <tr>
                            <td data-label="${lang === 'ar' ? 'نوع البيانات' : 'Type de données'}">${lang === 'ar' ? 'الصور والوسائط المشتركة' : 'Photos et médias partagés'}</td>
                            <td data-label="${lang === 'ar' ? 'الإجراء' : 'Action'}"><span class="badge badge-deleted">${lang === 'ar' ? 'محذوف' : 'Supprimé'}</span></td>
                            <td data-label="${lang === 'ar' ? 'المهلة' : 'Délai'}">${lang === 'ar' ? 'خلال 30 يوماً' : 'Dans les 30 jours'}</td>
                        </tr>
                        <tr>
                            <td data-label="${lang === 'ar' ? 'نوع البيانات' : 'Type de données'}">${lang === 'ar' ? 'رمز الإشعارات' : 'Token de notification push'}</td>
                            <td data-label="${lang === 'ar' ? 'الإجراء' : 'Action'}"><span class="badge badge-deleted">${lang === 'ar' ? 'محذوف' : 'Supprimé'}</span></td>
                            <td data-label="${lang === 'ar' ? 'المهلة' : 'Délai'}">${lang === 'ar' ? 'فوري' : 'Immédiat'}</td>
                        </tr>
                        <tr>
                            <td data-label="${lang === 'ar' ? 'نوع البيانات' : 'Type de données'}">${lang === 'ar' ? 'سجلات النشاط (لأغراض أمنية)' : 'Journaux d\'activité (à des fins de sécurité)'}</td>
                            <td data-label="${lang === 'ar' ? 'الإجراء' : 'Action'}"><span class="badge badge-retained">${lang === 'ar' ? 'محفوظ' : 'Conservé'}</span></td>
                            <td data-label="${lang === 'ar' ? 'المهلة' : 'Délai'}">${lang === 'ar' ? '90 يوماً كحد أقصى' : '90 jours max'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="email-box">
                <p>📧 ${lang === 'ar' ? 'لأي استفسار بخصوص حذف حسابك، تواصل معنا على' : 'Pour toute question concernant la suppression de votre compte, contactez-nous à'}</p>
                <a href="mailto:${email}">${email}</a>
                <p style="margin-top: 20px; font-size: 13px; opacity: 0.8;">${lang === 'ar' ? 'سنرد على طلبك في غضون 30 يوماً.' : 'Nous répondrons à votre demande dans un délai de 30 jours.'}</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2025 Phytoclinic - ${lang === 'ar' ? 'جميع الحقوق محفوظة' : 'Tous droits réservés'}</p>
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
    name: 'Phytoclinic API',
    version: '2.0.0',
    status: 'running',
    endpoints: {
      deleteAccount: '/api/delete-account',
      health: '/health'
    },
    documentation: 'https://github.com/chahidi007/phytoclinic'
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📍 Delete account page: http://localhost:${port}/api/delete-account`);
});