using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BackendApplication.Context
{
    [Table("user")]
    public class User
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("username")]
        public required string Username { get; set; }

        [Column("password_hash")]
        public required string PasswordHash { get; set; }
    }
}
