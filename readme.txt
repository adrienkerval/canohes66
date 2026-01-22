*** NOTICE D'UTILISATION - SITE D'ACTUALITÉS ***

1. PRÉPARATION DES DOSSIERS
   Créez un dossier principal sur votre ordinateur (ex: "MonSite").
   À l'intérieur, créez cette structure exacte :
   - index.html    (copiez le code fourni)
   - admin.html    (copiez le code fourni)
   - style.css     (copiez le code fourni)
   - app.js        (copiez le code fourni)
   - admin.js      (copiez le code fourni)
   - articles.json (copiez le code fourni)
   - img/          (Dossier vide pour vos photos)
   - files/        (Dossier vide pour vos PDF/Docs)

2. INSTALLATION SUR GITHUB (Gratuit)
   a. Créez un compte sur github.com
   b. Créez un "New Repository" (Nouveau dépôt). Nommez-le comme vous voulez, cochez "Public".
   c. Une fois créé, cliquez sur "Uploading an existing file".
   d. Glissez TOUS vos fichiers et dossiers dedans.
   e. Cliquez sur "Commit changes" (Valider).
   f. Allez dans "Settings" (Paramètres du dépôt) > "Pages" (menu de gauche).
   g. Dans "Branch", sélectionnez "main" et cliquez sur "Save".
   h. Attendez 2 minutes, GitHub vous donnera le lien de votre site (ex: votre-nom.github.io/projet).

3. AJOUTER UN ARTICLE (MÉTHODE SIMPLE)
   Puisque nous n'avons pas de serveur payant, la procédure est semi-manuelle :
   
   a. Ouvrez votre site et allez sur la page Admin (cliquez sur "Accès Admin" dans le menu).
   b. Le mot de passe par défaut est : admin
   c. Rédigez votre article, mettez en gras, etc.
   d. Si vous avez une photo :
      - Mettez le nom du fichier (ex: "vacances.jpg") dans la case "Image".
      - ATTENTION : Vous devez aussi "Uploader" cette image dans le dossier "img" sur GitHub manuellement.
   e. Cliquez sur "Ajouter l'article". Il apparaît dans la liste en bas.
   f. IMPORTANT : Cliquez sur le gros bouton vert "TÉLÉCHARGER LA SAUVEGARDE".
   g. Cela télécharge un fichier "articles.json" sur votre ordinateur.

4. MISE EN LIGNE
   a. Retournez sur votre page GitHub.
   b. Cliquez sur "Add file" > "Upload files".
   c. Glissez le fichier "articles.json" que vous venez de télécharger.
   d. Si vous avez mis des nouvelles images, glissez-les aussi (assurez-vous qu'elles aillent dans le dossier img/).
   e. Cliquez sur "Commit changes".
   
   C'est fini ! Le site se mettra à jour automatiquement après 1 ou 2 minutes.

5. SÉCURITÉ
   Le mot de passe dans admin.js empêche "Monsieur tout le monde" de modifier l'interface, mais un expert informatique pourrait le contourner.
   Cependant, comme il faut un accès à votre compte GitHub pour valider les changements, votre site est 100% sécurisé contre le piratage.